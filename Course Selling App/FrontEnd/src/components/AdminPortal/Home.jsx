import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <Button variant="outlined">
        <Link to={"/CourseDetail"}>Course Detail</Link>
      </Button>
    </div>
  );
}
