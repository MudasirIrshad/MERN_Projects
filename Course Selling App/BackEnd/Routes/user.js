const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const {  UserSignup, courseAdd } = require("../db/index");
const { UserAuthentication, UserSecretKey } = require("../middlewares/auth");
router.use(bodyParser.json());


router.post("/user/signup", async (req, res) => {
  const { name, gmail, password, purchaseCourses } = req.body;
  let UserExit = await UserSignup.findOne({ gmail });
  if (UserExit) {
    res.send("Gmail is already signed up");
  } else {
    jwt.sign({ name, gmail, password }, UserSecretKey, (err, token) => {
      if (err) {
        res.json({ err });
      } else {
        const newUser = new UserSignup({
          name,
          gmail,
          password,
          purchaseCourses,
        });
        newUser.save();
        res.send({ message: "Signed up done", token });
      }
    });
  }
});

router.post("/user/login", UserAuthentication, (req, res) => {
  res.send("User Logged in sucessfull");
});

router.get("/user/course", UserAuthentication, async (req, res) => {
  let courses = await courseAdd.find();
  res.json({
    courses,
  });
});

router.post("/user/purchaseCourse", UserAuthentication, async (req, res) => {
  let id = req.body.id;
  let pCourse = await courseAdd.findById(id);
  let gmail = req.user.gmail;
  let user = await UserSignup.findOne({ gmail });

  if (pCourse) {
    user.purchaseCourses.push(pCourse._id);
    user.save();
  }
  res.send(user);
});
module.exports = router