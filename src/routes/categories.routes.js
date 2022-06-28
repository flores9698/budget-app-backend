const express = require('express');
const router = express.Router();


//Controllers
const expensesController = require('../controllers/categories.controller');

router.get('/:id', expensesController.getCategories);
router.post('/', expensesController.AddCategory);
router.delete('/:id', expensesController.DeleteCategory);
router.put('/:id', expensesController.UpdateCategory);



module.exports = router;