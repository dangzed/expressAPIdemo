const express = require('express')
const multer= require('multer')

const userController = require('../controller/user.controller')
const validate = require('../validate/user.validate')

const router = express.Router()
const upload = multer({dest:'uploads/' })

router.get('/',userController.index)
router.get('/create', userController.getCreate)
router.get('/search', userController.search)
router.get('/:id', userController.view)
router.post('/create',
    upload.single('avatar') ,
    validate.postCreate,
    userController.postCreate
)

module.exports = router