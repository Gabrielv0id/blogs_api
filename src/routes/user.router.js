const express = require('express');
const userValidate = require('../middlewares/userValidate');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userValidate, userController.registerUser);

module.exports = router;