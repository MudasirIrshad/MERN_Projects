// E:\GitHub Repositories\MERN_Projects\FoodOrdering\Back End\routes\admin.js
const express = require("express");
const Food = require("../db/food"); // Import Food correctly

const router = express.Router();

// GET route to fetch all foods
router.get("/food", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST route to add new food
router.post("/addFood", async (req, res) => {
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

module.exports = router;
