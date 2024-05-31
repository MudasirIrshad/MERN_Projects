import React from "react";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { expenseAmountState, expenseNameState } from "../Atoms";
import axios from "axios";

export default function Expense() {
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
                alert(res.data);
              });
          }}
        >
          Add Expense
        </Button>
      </Card>
    </div>
  );
}

function backendRequest_ExpenseDetails() {}
