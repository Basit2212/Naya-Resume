const express = require('express')

const router = express.Router()

const {signup, login, email } = require('../controllers/authController')



router.post('/signup', signup)

router.post('/login', login)

router.post('/email', email)

module.exports = router