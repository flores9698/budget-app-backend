const pool = require('../config/db');

const controllers = {};


const getBankAccounts = async (req, res) => {
    const result = await pool.query('SELECT * FROM bank_accounts');
    res.json({message: 'Bank Accounts retrieved successfully', body: {bank_accounts: result.rows}});
}

const getBankAccount = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM bank_accounts WHERE id = $1', [id]);
    res.status(200).json({message: 'Bank Account retrieved successfully', body: {bank_account: result.rows[0]}});

}

const createBankAccount = async (req, res) => {
    const { name,balance,user_id,bank_id } = req.body;
    const result = await pool.query('INSERT INTO bank_accounts (account_name,balance,user_id,bank_id) VALUES ($1, $2, $3, $4)', [name,balance,user_id,bank_id]);
    res.json({
        message: 'Bank Account created successfully',
        body: {
            bank_account: { name, balance }
        }
    });
}

const updateBankAccount = async (req, res) => {
    const { id } = req.params;
    const { name,balance,user_id } = req.body;
    const result = await pool.query('UPDATE bank_accounts SET name = $1, balance = $2, user_id = $3 WHERE id = $4', [name,balance,user_id, id]);
    res.json({ message: 'Bank Account updated successfully' });
}

const updateBankAccountBalance = async (req, res) => {
    const { id } = req.params;
    const { balance } = req.body;
    const result = await pool.query('UPDATE bank_accounts SET balance = $1 WHERE id = $2', [balance, id]);
    res.json({ message: 'Bank Account updated successfully' });
}

const deleteBankAccount = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM bank_accounts WHERE id = $1', [id]);
    res.json({ message: 'Bank Account deleted successfully' });
}

controllers.getBankAccounts = getBankAccounts;
controllers.getBankAccount = getBankAccount;
controllers.createBankAccount = createBankAccount;
controllers.updateBankAccount = updateBankAccount;
controllers.updateBankAccountBalance = updateBankAccountBalance;
controllers.deleteBankAccount = deleteBankAccount;

module.exports = controllers;