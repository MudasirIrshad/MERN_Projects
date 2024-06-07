const UserSignup = require("../db/user");

const loginMiddleware =async function (req, res, next) {
    const {email, password} = req.body
  const findUser =await UserSignup.findOne({email: email, password: password});
  if (findUser) {
    next();
  } else {
    res.status(404).send("User not found");
  }
};
module.exports = loginMiddleware;