const express = require('express')
const router = express.Router()

//Controllers
const banksController = require('../controllers/banks.controller')

router.get('/', banksController.getBanks )


module.exports = router


