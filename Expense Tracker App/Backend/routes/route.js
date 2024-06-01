const express = require("express");
const { Income, Expense } = require("../database/db");

const router = express.Router();

router.post("/income", (req, res) => {
  const income = new Income(req.body);
  income.save().then((data) => {
    res.send(data);
  });
});
router.post("/expense", (req, res) => {
    const expense = new Expense(req.body);
    expense.save().then((data) => {
      res.send(data);
    });
})
router.get("/expenses",(req, res) => {
    Expense.find().then((data) => {
        res.send(data);
    })
})
router.get("/income",(req, res) => {
    Income.find().then((data) => {
        res.send(data);
    })
})
router.delete("/deleteIncome",(req, res) => {
  Income.findByIdAndDelete(req.body.id).then((data) => {
    res.send(data);
  })})
module.exports = router
