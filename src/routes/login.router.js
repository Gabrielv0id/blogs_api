const express = require('express');
const { loginController } = require('../controllers');
const loginValidate = require('../middlewares/loginValidate');

const router = express.Router();

router.post('/', loginValidate, loginController.userLogin);

module.exports = router;