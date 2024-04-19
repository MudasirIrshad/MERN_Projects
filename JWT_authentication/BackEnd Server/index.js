const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
const cors = require('cors');
app.use(cors())
app.use(bodyParser.json());

const URL = 'mongodb+srv://mudasirirshad47:mudasir123456789@cluster0.jzcnrjw.mongodb.net/AuthenticationDB';

mongoose.connect(URL);

const userSignupSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  password: String
});


const UserSignup = mongoose.model('UserSignup', userSignupSchema);

app.post('/signup', async (req, res) => {
  const { name, gmail, password } = req.body;
  let find=await UserSignup.findOne({name,gmail})
  if(find){
    res.send("User exits")
  }
  else{
    const newUser = new UserSignup({
        name,
        gmail,
        password
      });
      res.send("Done")
      newUser.save();
      console.log(name,gmail,password);
  }
  
});
let secretKey='user secret key'
app.post('/login',async (req, res) => {
  const { name, gmail, password } = req.body;

    let find=await UserSignup.findOne({ name, gmail, password });
    if(find){
        jwt.sign({ name, gmail, password },secretKey,(err,token)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send({
                    name,gmail,token
                })
            }
        })
    }
    else{
        res.send("No user found")
    }
});

app.listen(port, () => {
  console.log('Server started at port: ' + port);
});