// E:\GitHub Repositories\MERN_Projects\FoodOrdering\Back End\routes\admin.js
const express = require("express");
const Food = require("../db/food"); // Import Food correctly
const Admin = require("../db/admin");
const jwt = require("jsonwebtoken");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const secretKey = "admin secret key";

// GET route to fetch all foods
router.get("/food", adminMiddleware, async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const adminExists = await Admin.findOne({ name, email, password });
  if (adminExists) {
    res.json({
      message: "Admin already exists",
      status: 409,
    });
  } else {
    const newAdmin = new Admin({
      name,
      email,
      password,
    });
    newAdmin.save();
    res.json({
      message: "Admin created successfully",
      status: 201,
    });
  }
});

router.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  const admin = await Admin.findOne({ name, email, password });
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: admin._id, email }, secretKey);
  res.json({ token, message: "Login done" });
});

// POST route to add new food
router.post("/addFood", adminMiddleware, async (req, res) => {
  try {
    const newFood = new Food({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      available: req.body.available,
    });
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/deleteFood", async (req, res) => {
  const { name, price } = req.body;
  try {
    Food.findOneAndDelete({ name, price }).then((food) => {
      if (!food) {
        return res.status(404).json({ message: "Food not found" });
      }
      res.json({ message: "Food deleted successfully" });
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
