const express = require('express');
const router = express.Router();
const ArticleController = require('../http/Controllers/ArticleController');
const PrivateRoute = require("../http/PrivateRoute");
const prefix = '/actualities';

router.get('/', ArticleController.index);
router.get('/:id', ArticleController.getOne);
router.post('/', PrivateRoute, ArticleController.store);
router.put('/update/:id', PrivateRoute, ArticleController.update);
router.delete('/delete/:id', PrivateRoute, ArticleController.remove);

module.exports = {router, prefix};
