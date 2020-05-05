const express = require('express')
const multer = require('multer')

const userController = require('../controller/user.controller')
const validate = require('../validate/user.validate')
const admin = require('../validate/admin.validate')
const upload = multer({dest: './uploads'})

const router = express.Router()

router.get('/',userController.index)
router.get('/create',admin.validate, userController.getCreate)
router.get('/search', userController.search)
router.get('/:id', userController.view)
router.get('/delete/:id', admin.validate,userController.delete)
router.get('/update/:id',userController.getUpdate)
router.post('/create',
    upload.single('avatar') ,
    validate.postCreate,
    userController.postCreate
)
router.post('/update/:id',
    upload.single('avatar'),
    validate.postCreate,
    userController.postUpdate)


module.exports = router