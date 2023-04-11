const express = require('express');
const userValidate = require('../middlewares/userValidate');
const { userController } = require('../controllers');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.get('/', tokenValidate, userController.listUsers);
router.post('/', userValidate, userController.registerUser);

module.exports = router;