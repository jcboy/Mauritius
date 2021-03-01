const express = require('express');
const { check } = require('express-validator');
const ActualitiesController = require('../http/Controllers/ActualitiesController');
const {index, update, delete: remove, show, store} = ActualitiesController;

const router = express.Router();

const prefix = '/actualities';

router.get('/', index);

router.post('/',
    [
        check('title', 'Le titre est obligatoire'),
        check('description', 'Contenu obligatoire')
    ],
    store);

router.get('/:id', show);

router.put('/update/:id', update);

router.delete('/delete/:id', remove);



module.exports = {router, prefix};
