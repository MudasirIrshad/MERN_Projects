const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000
app.listen(()=>{
    console.log(`Server is running on port ${port}`)
});