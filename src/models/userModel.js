const pool = require('../config/db');
const bcrypt = require('bcryptjs');


const registerUser = async ({ email, password, first_name, last_name }) => {
    const hash = bcrypt.hashSync(password, 8);
    const query = `INSERT INTO users (email, password, name, last_name) VALUES ('${email}', '${hash}', '${first_name}', '${last_name}')`;
    await pool.query(query);
    result = await pool.query('SELECT token,email,name,last_name,id FROM users WHERE email = $1', [email]);
    return result.rows[0];
}



    const updatePassword = async ( { email, password }) => {
    const hash = bcrypt.hashSync(password, 8);
    const query = `UPDATE users SET password = '${hash}', token = md5(random()::text) WHERE email = '${email}'`;
    await pool.query(query);
    result = await pool.query('SELECT token,email FROM users WHERE email = $1', [email]);
    return result.rows[0];
}

const loginUser = async ({ email, password }) => {
    let result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password, user.password)) {

            //update token
            const query = `UPDATE users SET token = md5(random()::text) WHERE email = '${email}'`;
            const result_token = await pool.query(query);
            result = await pool.query('SELECT token,email,name,last_name,id FROM users WHERE email = $1', [email]);
            return result.rows[0];
        }

    }
    return null;
}


module.exports = {
    registerUser,
    updatePassword,
    loginUser
}