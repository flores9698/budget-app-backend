const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const userModels = require('../models/userModel');
const controllers = {};


const getUsers = async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json({message: 'Users retrieved successfully', body: {users: result.rows}});
};

const getUser = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.status(200).json({message: 'User retrieved successfully', body: {user: result.rows}});
}

const createUser = (req, res) => {
    const { first_name,last_name, email, password } = req.body;
    let result = userModels.registerUser({email, password, first_name, last_name}).then(result => {
        res.json({message: 'User created successfully', body: {user: result}});

    });

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name,last_name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const result = await pool.query('UPDATE users SET name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5', [name,last_name, email, hash, id]);
    res.json({ message: 'User updated successfully' });
}

const updatePassword = async (req, res) => {
    const { email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const result = userModels.updatePassword({email, password, hash}).then(result => {
        res.cookie('auth_token',result.token).json({message: 'User updated successfully', body: {user: result}});

    }
    );
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    const userPassword = userModels.loginUser({email, password}).then(
        result => {
            if (result) {
                res.cookie('auth_token',result.token).json({message: 'User logged in successfully', body: {user: result}});
            } else {
                res.status(403).clearCookie('auth_token', { sameSite: 'none', secure: true }).json({message: 'User not found'});
            }

        }
    );


}

const logOut = async (req, res) => {
    res.clearCookie('auth_token', { sameSite: 'none', secure: true }).json({message: 'User logged out successfully'});

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
controllers.updatePassword = updatePassword;
controllers.loginUser = loginUser;
// controllers.logOut = logOut;

module.exports = controllers;