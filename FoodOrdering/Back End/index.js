// E:\GitHub Repositories\MERN_Projects\FoodOrdering\Back End\index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin");
const URL = require("./db/connection"); // Ensure the path is correct

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/admin", adminRoutes);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
