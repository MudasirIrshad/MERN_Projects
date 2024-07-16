const mongoose = require("mongoose");


const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  }
});
const Food = mongoose.model("food", foodSchema);
module.exports = Food;
