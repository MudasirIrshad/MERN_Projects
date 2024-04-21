import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
      <Box sx={{ minWidth: 275 }}>
        <Card
          variant="outlined"
          style={{ width: "300px", textAlign: "center", padding: "10px" }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <Button
            variant="contained"
            onClick={() => {
              axios
                .post("http://localhost:3000/admin/signup", {
                  name,
                  gmail: email,
                  password: password,
                })
                .then((response) => {
                  console.log(response.data);
                });
            }}
          >
            Sign Up
          </Button>
        </Card>
      </Box>
    </div>
  );
}
