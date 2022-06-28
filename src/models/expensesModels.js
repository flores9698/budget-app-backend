// const { query } = require('express');
const pool = require('../config/db');


const getExpensesFromUser = async (userId) => {
    query = `SELECT * from expenses where user_id = ${userId}`;	
    result = await pool.query(query);
    return result.rows;
}


const addExpense = async (expense_name,user_id,date_added,category_id ) => {
   
    query = `INSERT INTO expenses (expense_name,user_id,date_added,category_id) VALUES ('${expense_name}',${user_id},'${date_added}',${category_id})`;
    result = await pool.query(query);
    result = await pool.query('SELECT * from expenses where user_id = $1', [user_id]);
    return result.rows;
}


module.exports = {
    getExpensesFromUser,
    addExpense
}




