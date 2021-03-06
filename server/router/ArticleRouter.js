const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const ArticleController = require('../http/Controllers/ArticleController');
const {index, update, remove, show, store} = ArticleController;
const PrivateRoute = require("../http/PrivateRoute");

const prefix = '/actualities';

router.get('/', index);
router.get('/:id', show);

router.post('/',
    [
        check('title', 'Le titre est obligatoire'),
        check('description', 'Contenu obligatoire')
    ], PrivateRoute,
    store);

router.put('/update/:id', PrivateRoute, update);
router.delete('/delete/:id', PrivateRoute, remove);

module.exports = {router, prefix};