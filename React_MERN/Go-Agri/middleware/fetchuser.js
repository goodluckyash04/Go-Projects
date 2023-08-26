var jwt = require("jsonwebtoken");
const secretkey = process.env.SECRETKEY;

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json("Invalid Login Token");
  }
  try {
    const data = jwt.verify(token, secretkey);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Use Valid Token" });
  }
};

module.exports = fetchuser;
