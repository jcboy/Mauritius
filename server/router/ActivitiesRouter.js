const ActivitiesController = require('../http/Controllers/ActivitiesController');
const {index, update, remove, create} = ActivitiesController;

const express = require('express');
const router = express.Router();
const prefix = '/activities';

router.get('/', index);
router.post('/create', create);
router.put('/update', update);
router.delete('/delete/:id', remove);

module.exports = {router, prefix};
