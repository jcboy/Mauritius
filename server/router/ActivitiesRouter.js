const ActivitiesController = require('../http/Controllers/ActivitiesController');
const {index, update, delete: remove, read, create} = ActivitiesController;

const express = require('express');
const router = express.Router();
const prefix = '/activities';

router.get('/', index);

router.post('/create', create);

router.put('/update', update);

router.delete('/delete', remove);

module.exports = {router, prefix};
