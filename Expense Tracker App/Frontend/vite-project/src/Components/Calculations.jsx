import { Button, Card } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { allExpensesState, allIncomeState } from "../Atoms";
import axios from "axios";

export default function Calculations() {
  const [Expenses, setExpenses] = useRecoilState(allExpensesState);
  const [Income, setIncome] = useRecoilState(allIncomeState);
  const totalIncomeAmount = Income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenseAmount = Expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

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
    <div>
      <Card
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <Card style={{ paddingRight: "20px", paddingLeft: "20px" }}>
          <h3>Expenses</h3>
          <div style={{ height: "150px", overflow: "auto" }}>
            {Expenses.map((x) => (
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  listStyle: "none",
                  padding: "10px",
                  margin: "5px",
                }}
                key={x._id}
              >
                <div>
                  <li>{x.name}</li>
                  <li>{x.amount}</li>
                </div>
                <Button
                  style={{
                    marginLeft: "10px",
                    width: "20px",
                    height: "30px",
                    backgroundColor: "red",
                  }}
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
          <h3>Total Expense: {totalExpenseAmount}</h3>
        </Card>
        <Card style={{ paddingRight: "20px", paddingLeft: "20px" }}>
          <h3>Income</h3>
          <div
            style={{
              listStyle: "none",
              padding: "10px",
              margin: "5px",
              height: "130px",
              overflow: "auto",
            }}
          >
            {Income.map((x) => (
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  listStyle: "none",
                  padding: "8px",
                  margin: "5px",
                }}
                key={x._id}
              >
                <div>
                  <li>{x.name}</li>
                  <li>{x.amount}</li>
                </div>
                <Button
                  style={{
                    marginLeft: "10px",
                    width: "20px",
                    height: "30px",
                    backgroundColor: "red",
                  }}
                  variant="contained"
                  onClick={() => deleteIncome(x._id)}
                >
                  Delete
                </Button>
                <br />
              </div>
            ))}
          </div>
          <h3>Total Income: {totalIncomeAmount}</h3>
        </Card>
      </Card>
        <h3>Remaining Balance: {totalIncomeAmount-totalExpenseAmount}</h3>
    </div>
  );
}
