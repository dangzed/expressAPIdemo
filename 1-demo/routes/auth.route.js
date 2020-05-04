const express = require('express')
const controller = require('../controller/auth.controller')
const router = express.Router()

router.get('/login', controller.getLogin)
router.post('/login',controller.postLogin)
router.get('/logout',controller.logout)

module.exports = router