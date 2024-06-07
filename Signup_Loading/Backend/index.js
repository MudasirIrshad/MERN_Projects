const express = require('express')
const app = express()
const cors= require('cors')
const router = require('./routes/user')
const bodyParser = require('body-parser')
const JWT = require("jsonwebtoken")
app.use(bodyParser.json())

app.use(cors())

app.listen(3000)

app.use("/user",router)
