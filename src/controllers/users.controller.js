const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const controllers = {};

const getUsers = async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json({message: 'Users retrieved successfully', body: {users: result.rows}});
};

const getUser = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.status(200).json({message: 'User retrieved successfully', body: {user: result.rows[0]}});
}

const createUser = async (req, res) => {
    const { name,last_name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const result = await pool.query('INSERT INTO users (name,last_name, email, password) VALUES ($1, $2, $3, $4)', [name,last_name, email, hash]);
    res.json({
        message: 'User created successfully',
        body: {
            user: { name, email }
        }
    });
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name,last_name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const result = await pool.query('UPDATE users SET name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5', [name,last_name, email, hash, id]);
    res.json({ message: 'User updated successfully' });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'User deleted successfully' });
}

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    res.json({message: 'User retrieved successfully', body: {user: result.rows[0]}});
}

const getUserByNameAndLastName = async (req, res) => {
    const { name,last_name } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE name = $1 AND last_name = $2', [name,last_name]);
    res.json({message: 'User retrieved successfully', body: {user: result.rows[0]}});

}

controllers.getUsers = getUsers;
controllers.getUser = getUser;
controllers.createUser = createUser;
controllers.updateUser = updateUser;
controllers.deleteUser = deleteUser;
controllers.getUserByEmail = getUserByEmail;
controllers.getUserByNameAndLastName = getUserByNameAndLastName;

module.exports = controllers;