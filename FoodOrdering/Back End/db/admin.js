const mongoose = require("mongoose");
const URL =
  "mongodb+srv://mudasirirshad47:mudasir123456789@cluster0.jzcnrjw.mongodb.net/Restaurant";
mongoose.connect(url).then(() => {
  console.log("Connected to MongoDB");
});


const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})
const admin = mongoose.model('admin', adminSchema)

module.exports = {
  URL,
  admin
};