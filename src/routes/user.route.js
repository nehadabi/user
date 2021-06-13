const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

router.get('/', userController.findAll);

router.post('/', userController.create);

router.delete('/:id', userController.delete);

module.exports = router
