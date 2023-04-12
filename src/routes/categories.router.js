const express = require('express');
const { categoriesController } = require('../controllers');
const tokenValidate = require('../middlewares/tokenValidate');
const categoriesValidate = require('../middlewares/categoriesValidate');

const router = express.Router();

router.get('/', tokenValidate, categoriesController.listCategories);
router.post('/', tokenValidate, categoriesValidate, categoriesController.registerCategory);

module.exports = router;