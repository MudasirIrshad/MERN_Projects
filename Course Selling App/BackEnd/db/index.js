const mongoose = require("mongoose");

const URL =
  "mongodb+srv://mudasirirshad47:mudasir123456789@cluster0.jzcnrjw.mongodb.net/Course_Selling_App";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminSingupSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  password: String,
});

const userSignupSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  password: String,
  purchaseCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courseAdd" }],
});

const courseAddSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const AdminSignup = mongoose.model("AdminSignup", adminSingupSchema);
const UserSignup = mongoose.model("UserSignup", userSignupSchema);
const courseAdd = mongoose.model("courseAdd", courseAddSchema);

module.exports = {
  AdminSignup,
  UserSignup,
  courseAdd
};
