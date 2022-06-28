const pool = require('../config/db');
const expensesModel = require('../models/expensesModels');

const controllers = {};

const getExpenses = async (req, res) => {
    const { user_id} = req.body;
    const result = await expensesModel.getExpensesFromUser(user_id);
    res.json({message: 'Bank Accounts retrieved successfully', body: {expenses: result}});
}


controllers.getExpenses = getExpenses;


module.exports = controllers;