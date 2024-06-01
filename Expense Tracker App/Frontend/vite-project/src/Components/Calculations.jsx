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
  const deleteExpenses = async (id) => {
    try {
      await axios.delete("http://localhost:3000/deleteExpense", {
        data: { id },
      });
      setExpenses(Expenses.filter((x) => x._id !== id));
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
            <div style={{ display: "flex" }} key={x._id}>
              <div>
                <li>{x.name}</li>
                <li>{x.amount}</li>
              </div>
              <Button
                style={{ marginLeft: "10px", width: "20px", height: "30px" }}
                variant="contained"
                onClick={() => {
                  deleteExpenses(x._id);
                }}
              >
                Delete
              </Button>
              <br />
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        <h3>Income</h3>
        <div>
          {Income.map((x) => (
            <div style={{ display: "flex" }} key={x._id}>
              <div>
                <li>{x.name}</li>
                <li>{x.amount}</li>
              </div>
              <Button
                style={{ marginLeft: "10px", width: "20px", height: "30px" }}
                variant="contained"
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
