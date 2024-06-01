import React, { useState } from "react";
import { Alert, Button, Card, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { expenseAmountState, expenseNameState } from "../Atoms";
import axios from "axios";

export default function Expense() {
  const [alertVisible, setAlertVisible] = useState(false);

  let name = useRecoilValue(expenseNameState);
  let amount = useRecoilValue(expenseAmountState);
  const setName = useSetRecoilState(expenseNameState);
  const setAmount = useSetRecoilState(expenseAmountState);
  return (
    <div>
      <Card style={{ textAlign: "center", margin: "10px", padding: "10px" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            axios
              .post("http://localhost:3000/Expense", {
                name: name,
                amount: amount,
              })
              .then((res) => {
                setAlertVisible(true);
                let interval = setInterval(() => {
                  setAlertVisible(false);
                }, 2000);
              });
          }}
        >
          Add Expense
        </Button>
      </Card>
      {alertVisible && (
        <Snackbar open={open} autoHideDuration={6000} message="Success" />
      )}
    </div>
  );
}
