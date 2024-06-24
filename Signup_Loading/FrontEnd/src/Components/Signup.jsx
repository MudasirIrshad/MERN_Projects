import React, { useState } from "react";
import Card from "@mui/material/Card";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { emailState, nameState, passwordState } from "../store/atom";

export default function Signup() {
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [email, setEmail] = useRecoilState(emailState);
  return (
    <Card style={{ width: "400px", textAlign: "center" }}>
      <h3>SignUp</h3>
      <br />
      <TextField
        onChange={nameChange}
        variant="outlined"
        label="Name"
        required
      ></TextField>
      <br />
      <br />
      <TextField
        onChange={emailChange}
        variant="outlined"
        label="E-mail"
        required
      ></TextField>
      <br />
      <br />
      <TextField
        onChange={passwordChange}
        variant="outlined"
        label="Password"
        required
      ></TextField>
      <br />
      <Button
        onClick={() => {
          try {
            axios.post("http://localhost:3000/user/signup", {
              name,
              email,
              password,
            });
            alert("Success");
          } catch (err) {
            alert("Error: " + err.message);
          }
        }}
      >
        Signup
      </Button>
    </Card>
  );
}

function nameChange(e) {
  setName(e.target.value);
}
function emailChange(e) {
  setEmail(e.target.value);
}
function passwordChange(e) {
  setPassword(e.target.value);
}
