const express = require("express");
const User = require("../models/User");
const router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
var fetchuser =require("../middleware/fetchuser");
const JWT_SECRET = "yashi$g00d";

// Route:1 Create a User using :POST "/api/auth/createuser"  ...No Login reqired..endpoint_1
router.post(
  "/createuser",
  [
    body("name", "Name must have min 3 char").isLength({ min: 3 }), // body(tag,custome msg)
    body("email", "enter valid email").isEmail(),
    body("password", "password should be min 5 char").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false
    // request,response
    // Error Messages Bad Requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if Email already Exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ success,errors: "Email Already Exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const securedPassword = await bcrypt.hash(req.body.password, salt);

      // ..............creates new user..................
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securedPassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success=true
      res.json({success, authToken });
    } catch (error) {
      console.error(error.msg);
      res.status(500).send("Internal Server Error"); //for Internal coding error
    }
  }
);

// Route:2 Authenticate a User using :POST "/api/auth/login"  ...No Login reqired
router.post(
  "/login",
  [
    body("email", "enter valid email").isEmail(),
    body("password", "Password can not be Blank").exists(),
  ],
  async (req, res) => {
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Email or Password is incorrect" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({success, error: "Email or Password is incorrect" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success=true
      res.json({ success,authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error"); //for Internal coding error
    }
  }
);

// Route:3 logged in User Detail using :POST "/api/auth/getuser"  ...Login reqired

router.post("/getuser",fetchuser,
  async (req, res) => {

    try {
       userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user) 
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error"); //for Internal coding error
    }
  }
);

module.exports = router;
