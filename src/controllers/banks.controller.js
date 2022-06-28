const pool = require('../config/db');
const bankModel = require('../models/bankModels');

const controllers = {};

const getBanks = async (req, res) => {
    const result = await bankModel.getBankAccounts();
    res.json({message: 'Bank Accounts retrieved successfully', body: {bank_accounts: result}});
}


controllers.getBanks = getBanks;


module.exports = controllers;