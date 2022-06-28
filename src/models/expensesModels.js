const pool = require('../config/db');


module.exports.getExpensesFromUser = async (userId) => {
    query = `SELECT * from expenses where user_id = ${userId}`;	
    result = await pool.query(query);
    return result.rows;
}




