// const { query } = require('express');
const pool = require('../config/db');


const getExpensesFromUser = async (userId) => {
    query = `SELECT * from expenses where user_id = ${userId}`;	
    result = await pool.query(query);
    result = await pool.query("select * from expenses inner join categories on expenses.category_id = categories.id where expenses.user_id  = $1 or expenses.user_id =25", [userId]);
    return result.rows;
}


const addExpense = async (expense_name,user_id,date_added,category_id,amount,bank_account_id) => {
   
    query = `INSERT INTO expenses (expense_name,user_id,date_added,category_id,amount,bank_account_id ) VALUES ('${expense_name}',${user_id},'${date_added}',${category_id},${amount},${bank_account_id})`;
    result = await pool.query(query);
    result = await pool.query("select * from expenses inner join categories on expenses.category_id = categories.id where expenses.user_id  = $1 or expenses.user_id =25", [user_id]);
    return result.rows;
}


module.exports = {
    getExpensesFromUser,
    addExpense
}




