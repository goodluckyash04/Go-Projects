var jwt = require("jsonwebtoken");
const JWT_SECRET = "yashi$g00d";

const fetchuser = (req, res, next) => {
  // Get the User from the jwt token and add id to req Object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please Use Valid Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Use Valid Token" });
  }
};
module.exports = fetchuser;
