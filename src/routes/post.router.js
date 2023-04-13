const express = require('express');
const { postController } = require('../controllers');
const tokenValidate = require('../middlewares/tokenValidate');
const postValidate = require('../middlewares/postValidate');

const router = express.Router();

router.post('/', tokenValidate, postValidate, postController.registerPost);

module.exports = router;