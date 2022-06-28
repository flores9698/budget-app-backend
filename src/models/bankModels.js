const pool = require('../config/db');


module.exports.getBankAccounts = async () => {
    query = `SELECT * FROM banks `;
    result = await pool.query(query);
    return result.rows;
}


