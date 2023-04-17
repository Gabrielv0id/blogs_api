const express = require('express');
const userValidate = require('../middlewares/userValidate');
const { userController } = require('../controllers');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.get('/', tokenValidate, userController.listUsers);
router.get('/:id', tokenValidate, userController.getUserById);
router.post('/', userValidate, userController.registerUser);
router.delete('/me', tokenValidate, userController.deleteUser);

module.exports = router;