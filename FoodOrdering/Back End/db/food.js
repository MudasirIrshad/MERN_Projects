const mongoose = require("mongoose");
import { URL } from "./admin";
mongoose.connect(URL).then(()=>{
    console.log("Connected");
})

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
  available: true,
});
const food = mongoose.model("food", foodSchema);
module.exports = food;
