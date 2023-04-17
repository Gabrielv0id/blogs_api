const express = require('express');
const { postController } = require('../controllers');
const tokenValidate = require('../middlewares/tokenValidate');
const postValidate = require('../middlewares/postValidate');
const updatePostValidate = require('../middlewares/updatePostValidate');

const router = express.Router();

router.get('/', tokenValidate, postController.listPosts);
router.get('/:id', tokenValidate, postController.getPostById);
router.post('/', tokenValidate, postValidate, postController.registerPost);
router.put('/:id', tokenValidate, updatePostValidate, postController.updatePost);
router.delete('/:id', tokenValidate, postController.deletePost);

module.exports = router;