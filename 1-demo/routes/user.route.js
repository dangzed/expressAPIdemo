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
router.get('/delete/:id',userController.delete)
router.get('/update/:id',userController.getUpdate)
router.post('/create',
    /*upload.single('avatar') ,*/
    validate.postCreate,
    userController.postCreate
)
router.post('/update/:id',
    validate.postCreate,
    userController.postUpdate)


module.exports = router