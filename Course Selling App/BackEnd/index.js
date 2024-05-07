const express = require("express");
const app = express();
const port = 3000;
const adminRouter = require("./Routes/admin");
const userRouter = require("./Routes/user");
const cors = require("cors");
app.use(cors());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Server Started at port: " + port);
});
