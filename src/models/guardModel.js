const pool = require('../config/db');

module.exports.verifyUserToken = async (token) => {
    query = `SELECT * FROM users WHERE token = '${token}'`;
    result = await pool.query(query);
    if (result.rows.length > 0) {
        return result.rows[0];
    }
    return null;
}
