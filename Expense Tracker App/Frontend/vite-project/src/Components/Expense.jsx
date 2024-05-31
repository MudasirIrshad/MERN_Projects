import React from "react";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Expense() {
  return (
    <div>
      <Card style={{ textAlign: "center", margin: "10px", padding: "10px" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          size="small"
        />
        <br />
        <br />
        <Button variant="contained"> Add Expense </Button>
      </Card>
    </div>
  );
}

