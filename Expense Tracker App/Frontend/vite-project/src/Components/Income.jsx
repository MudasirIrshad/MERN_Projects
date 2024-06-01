import React from "react";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import { incomeAmountState, incomeNameState } from "../Atoms";

export default function Income() {
  let name = useRecoilValue(incomeNameState);
  let amount = useRecoilValue(incomeAmountState);
  const setName = useSetRecoilState(incomeNameState);
  const setAmount = useSetRecoilState(incomeAmountState)
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
              .post("http://localhost:3000/income", {
                name: name,
                amount: amount,
              })
              .then((res) => {
                console.log(res.data);
              });
          }}
        >
          Add Income
        </Button>
      </Card>
    </div>
  );
}

function backendRequest_ExpenseDetails() {}
