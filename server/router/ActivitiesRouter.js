const ActivitiesController = require('../http/Controllers/ActivitiesController');
const {index, getOne, update, remove, create} = ActivitiesController;

const express = require('express');
const router = express.Router();
const prefix = '/activities';

router.get('/', index);
router.get('/:id', getOne);
router.post('/create', create);
router.put('/update', update);
router.delete('/delete/:id', remove);

module.exports = {router, prefix};
