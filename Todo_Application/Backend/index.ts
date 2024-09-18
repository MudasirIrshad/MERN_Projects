import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const url =
  "mongodb+srv://mudasirirshad47:mudasir123456789@cluster0.jzcnrjw.mongodb.net/TodoApp";
mongoose.connect(url);
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const cors = require("cors");
app.use(cors());

const Tasks = new mongoose.Schema({
  title: String,
  description: String,
});

const AddTask = mongoose.model("AddTask", Tasks);

interface createTask {
  title: string;
  description: string;
}
app.post("/tasks", (req, res) => {
  const input: createTask = req.body;
  const newTask = new AddTask({
    title: input.title,
    description: input.description,
  });
  res.send("Added successfully");
  newTask.save();
});
console.log("hello");

app.get("/tasks", async (req, res) => {
  const tasks = await AddTask.find();
  res.send(tasks);
});

app.delete("/tasks/:taskID", async (req, res) => {
  const id = req.params.taskID;
  const task = await AddTask.findByIdAndDelete(id);
  res.json(task);
});

app.put("/tasks", async (req, res) => {
  const title = req.headers.title;
  const description = req.headers.description;
  const id = req.headers.id;
  const task = await AddTask.findByIdAndUpdate(id, { title, description });
  if (task) {
    res.send("Updated");
  } else {
    res.send("Issue occur");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
