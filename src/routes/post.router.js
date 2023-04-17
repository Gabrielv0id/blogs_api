const express = require('express');
const { postController } = require('../controllers');
const tokenValidate = require('../middlewares/tokenValidate');
const postValidate = require('../middlewares/postValidate');

const router = express.Router();

router.get('/', tokenValidate, postController.listPosts);
router.get('/:id', tokenValidate, postController.getPostById);
router.post('/', tokenValidate, postValidate, postController.registerPost);

module.exports = router;