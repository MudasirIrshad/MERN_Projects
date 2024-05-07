const jwt = require("jsonwebtoken");

const AdminSecretKey = "JWT Course selling server";
// -------------- ADMIN AUTHENTICATION ------------------------
const AdminAuthentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  console.log(token);
  jwt.verify(token, AdminSecretKey, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token.");
    req.user = decoded;
    next();
  });
};
// --------------- USER AUTHENTICATION ---------------


const UserSecretKey = "I am a user";
function UserAuthentication(req, res, next) {
  let token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");

  jwt.verify(token, UserSecretKey, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token.");
    req.user = decoded;
    next();
  });
}



module.exports = {
  AdminAuthentication,
  AdminSecretKey,
  UserAuthentication,
  UserSecretKey
};
