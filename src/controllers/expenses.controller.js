const pool = require('../config/db');
const expensesModel = require('../models/expensesModels');

const controllers = {};

const getExpenses = async (req, res) => {
    const {id} = req.params;
    const result = await expensesModel.getExpensesFromUser(id);
    res.json({message: 'Expenses retrieved succesfully', body: {expenses: result}});
}

const AddExpense = async (req, res) => {
    const { expense_name,user_id,date_added,category_id,amount,bank_account_id,income } = req.body;
    const result = await expensesModel.addExpense(expense_name,user_id,date_added,category_id,amount,bank_account_id,income );
    res.json({message: 'Expenses retrieved succesfully', body: {expenses: result}});
}

controllers.getExpenses = getExpenses;
controllers.AddExpense = AddExpense;

module.exports = controllers;