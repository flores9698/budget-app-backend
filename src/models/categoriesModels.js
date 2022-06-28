const pool = require('../config/db');


const getCategoriesFromUser = async (userId) => {
    // Thsi will return all the categories from a user and categories by default user id=25
    query = `SELECT * from categories where user_id = '${userId}' or user_id = '25'`;
    result = await pool.query(query);
    return result.rows;
}

const addCategory = async (category_name,user_id) => {
    query = `INSERT INTO categories (category_name,user_id) VALUES ('${category_name}',${user_id})`;
    result = await pool.query(query);
    result = await pool.query('SELECT * from categories where user_id = $1', [user_id]);
    return result.rows;
}

const deleteCategory = async (category_id,user_id) => {
    query = `DELETE from categories where category_id = ${category_id} and user_id = ${user_id}`;
    result = await pool.query(query);
    result = await pool.query('SELECT * from categories where user_id = $1', [user_id]);
    return result.rows;
}

const updateCategory = async (category_id,category_name,user_id) => {
    query = `UPDATE categories set category_name = '${category_name}' where category_id = ${category_id} and user_id = ${user_id}`;
    result = await pool.query(query);
    result = await pool.query('SELECT * from categories where user_id = $1', [user_id]);
    return result.rows;
}

module.exports = {
    getCategoriesFromUser,
    addCategory,
    deleteCategory,
    updateCategory
}