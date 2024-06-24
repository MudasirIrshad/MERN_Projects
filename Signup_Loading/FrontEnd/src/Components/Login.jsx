import Card from "@mui/material/Card";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";

import CircularProgress from '@mui/material/CircularProgress';
import {
  emailState,
  loadingState,
  nameState,
  passwordState,
} from "../store/atom";
import { useEffect, useState } from "react";

export default function Login() {
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [email, setEmail] = useRecoilState(emailState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      {success ? (
        <div>
          <h1>Success</h1>
        </div>
      ) : (
        <div>
          <Card style={{ width: "400px", textAlign: "center" }}>
            {loading ? (
              <CircularProgress />
            ) : (
              <div>
                <h3>Login</h3>
                <br />
                <TextField
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  variant="outlined"
                  label="Name"
                ></TextField>
                <br />
                <br />
                <TextField
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  variant="outlined"
                  label="E-mail"
                ></TextField>
                <br />
                <br />
                <TextField
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  variant="outlined"
                  label="Password"
                ></TextField>
                <br />
                <Button
                  onClick={async () => {
                    try {
                      setLoading(true);
                      await axios.post("http://localhost:3000/user/login", {
                        name,
                        email,
                        password,
                      });
                      setSuccess(true)
                      setLoading(false);
                    } catch (err) {
                      alert("Error: " + err.message);
                      setLoading(false);
                    }
                  }}
                >
                  Login
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
