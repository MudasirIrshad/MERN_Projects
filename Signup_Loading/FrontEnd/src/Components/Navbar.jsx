import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Router>
      <Stack spacing={2} direction="row" style={{ margin: "5px" }}>
        <Link to={"/signup"}>
          <Button variant="contained" size="small">
            Signup
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="contained" size="small">
            Login
          </Button>
        </Link>
      </Stack>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  );
}
