const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const route = require("./routes/route");

app.use("/", route);
app.listen(3000);
