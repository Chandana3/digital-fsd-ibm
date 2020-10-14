const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();
const productsController=require('../controllers/product');

router.get('/home',productsController.home);

module.exports = router;