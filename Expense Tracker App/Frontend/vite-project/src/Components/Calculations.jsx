import { Button, Card } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { allExpensesState, allIncomeState } from "../Atoms";
import axios from "axios";

export default function Calculations() {
  const [Expenses, setExpenses] = useRecoilState(allExpensesState);
  const [Income, setIncome] = useRecoilState(allIncomeState);

  const deleteIncome = async (id) => {
    try {
      await axios.delete("http://localhost:3000/deleteIncome", {
        data: { id },
      });
      setIncome(Income.filter((x) => x._id !== id));
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
      }}
    >
      <Card style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        <h3>Expenses</h3>
        <div>
          {Expenses.map((x) => (
            <div key={x._id}>
              <li>{x.name}</li>
              <li>{x.amount}</li>
              <br />
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        <h3>Income</h3>
        <div>
          {Income.map((x) => (
            <div key={x._id}>
              <li>{x.name}</li>
              <li>{x.amount}</li>
              <Button
                variant="contained"
                size="small"
                onClick={() => deleteIncome(x._id)}
              >
                Delete
              </Button>
              <br />
            </div>
          ))}
        </div>
      </Card>
    </Card>
  );
}
