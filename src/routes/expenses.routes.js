const express = require('express')
const router = express.Router()

//Controllers
const expensesController = require('../controllers/expenses.controller')

router.get('/', expensesController.getExpenses )


module.exports = router


