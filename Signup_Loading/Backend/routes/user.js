const express = require("express");
const UserSignup = require("../db/user");
const loginMiddleware = require("../middleware/loginMiddleware");
const router = express.Router();
const jwt = require("jsonwebtoken")
const privateKey = "jwt private key"

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new UserSignup({
    name,
    email,
    password,
  });
  newUser.save();
  res.status(201).json({
    message: "User created successfully",
  });
});
router.post("/login", loginMiddleware, (req, res) => {
    const token = jwt.sign({
        name: req.body.name,
        email: req.body.email,
        password:  req.body.password
    },privateKey)
    res.status(200).json({
      message: "User logged in successfully",
      token: token
    });
  
});
router.get("/", (req, res) => {
  
});

module.exports = router;
