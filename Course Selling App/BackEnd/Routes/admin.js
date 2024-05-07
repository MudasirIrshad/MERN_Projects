const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const { AdminSignup, UserSignup, courseAdd } = require("../db/index");
const { AdminAuthentication, AdminSecretKey } = require("../middlewares/auth");
router.use(bodyParser.json());
router.post("/signup", async (req, res) => {
  const { name, gmail, password } = req.body;
  let findAdmin = await AdminSignup.findOne({ gmail });
  if (findAdmin) {
    res.status(401).send("Admin Exits");
  } else {
    const newAdmin = new AdminSignup({
      name,
      gmail,
      password,
    });

    newAdmin.save();
  }
});

router.post("/login", async (req, res) => {
  const { name, gmail, password } = req.body;
  let findAdmin = await AdminSignup.findOne({ name, gmail, password });
  if (findAdmin) {
    jwt.sign({ name, gmail, password }, AdminSecretKey, (err, token) => {
      res.status(200).send({ name, gmail, token });
    });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

router.get("/detail", AdminAuthentication, (req, res) => {
  res.send(req.user);
});
// ---------------------------------------------------
router.get("/users", AdminAuthentication, async (req, res) => {
  const users = await UserSignup.find();
  res.json(users);
});
// ----------- Course Add, Detail --------------------

router.post("/courses", AdminAuthentication, (req, res) => {
  const { title, description, price, image } = req.body;
  const newCourse = new courseAdd({
    title,
    description,
    price,
    image,
  });
  newCourse.save();
  res.send({ title, description, price });
});
router.put("/editCourse/:courseId", AdminAuthentication, async (req, res) => {
  const id = req.params.courseId;
  const { title, description, price, image } = req.body;
  const course = await courseAdd.findById(id);
  if (!course) res.status(404).send("Course not found");
  else {
    course.title = title;
    course.description = description;
    course.price = price;
    course.image = image;
    course.save();
    res.send({ title, description, price });
  }
});
router.get("/courses", AdminAuthentication, async (req, res) => {
  const courses = await courseAdd.find();
  res.send(courses);
});
router.delete("/course/:id", AdminAuthentication, async (req, res) => {
  const id = req.params.id;
  const course = await courseAdd.findByIdAndDelete(id);
  if (!course) res.status(404).send("Course not found");
  else {
    res.send({ message: "Course deleted" });
  }
});
module.exports = router;
