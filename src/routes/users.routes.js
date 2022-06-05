const express = require('express')
const router = express.Router()

//Controllers
const usersController = require('../controllers/users.controller')






router.get('/', usersController.getUsers )
router.get('/:id', usersController.getUser )
router.post('/', usersController.createUser )
router.patch('/:id', usersController.updateUser )
router.delete('/:id', usersController.deleteUser )
router.get('/email/:email', usersController.getUserByEmail )
router.get('/name/:name/last_name/:last_name', usersController.getUserByNameAndLastName )

module.exports = router