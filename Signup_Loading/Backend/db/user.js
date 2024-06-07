const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://mudasirirshad47:mudasir123456789@cluster0.jzcnrjw.mongodb.net/Singup_Loading";
mongoose.connect(connectionString);


const userSignupSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserSignup = mongoose.model("UserSignup", userSignupSchema);

module.exports = UserSignup;

