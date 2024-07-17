const secretKey = "admin secret key";
const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  console.log(token);
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token.");
    req.user = decoded;
    next();
  });
};
module.exports = adminMiddleware;
