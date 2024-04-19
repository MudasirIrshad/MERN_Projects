import Card from "@mui/material/Card";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "40rem", margin: 2 }}>
        <Card
          variant="outlined"
          style={{ padding: "10px", textAlign: "center" }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: "70%", paddingBottom: "10px" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "70%", paddingBottom: "10px" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "70%", paddingBottom: "10px" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button variant="contained" onClick={() => {
            axios.post("http://localhost:3000/signup", {
              name: name,
              gmail: email,
              password: password,
            }).then((response) => {
              alert(response.data)
            });
          }}>
            Sign Up
          </Button>
        </Card>
      </Box>
    </div>
  );
}
