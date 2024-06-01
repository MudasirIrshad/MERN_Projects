import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Income from "./Income";
import Expense from "./Expense";
import Calculations from "./Calculations";
import Home from "./Home";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { allExpensesState, allIncomeState } from "../Atoms";

export default function Nav() {
  const setAllExpenses = useSetRecoilState(allExpensesState);
  const setAllIncome = useSetRecoilState(allIncomeState);
  return (
    <Router>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Link to={"/"}></Link>
        <Link to={"/Income"}>
          <Button>Income</Button>
        </Link>
        <Link to={"/Expense"}>
          <Button>Expense</Button>
        </Link>
        <Link to={"/Calculations"}>
          <Button
            onClick={() => {
              axios.get("http://localhost:3000/expenses").then((res) => {
                setAllExpenses(res.data);
              });
              axios.get("http://localhost:3000/income").then((res) => {
                setAllIncome(res.data);
              });
            }}
          >
            Calculations
          </Button>
        </Link>
      </ButtonGroup>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Expense" element={<Expense />} />
        <Route path="/Calculations" element={<Calculations />} />
      </Routes>
    </Router>
  );
}
