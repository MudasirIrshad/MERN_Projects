import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <Button
        variant="outlined"
        onClick={() => {
          window.location = "/courseDetail";
          windows.location.reload();
        }}
      >
        Course Detail
      </Button>
    </div>
  );
}
