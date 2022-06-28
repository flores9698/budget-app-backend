const express = require('express')
const router = express.Router()

//Controllers
const expensesController = require('../controllers/expenses.controller')

router.get('/:id', expensesController.getExpenses )
router.post('/', expensesController.AddExpense )


module.exports = router


