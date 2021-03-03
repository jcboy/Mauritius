const ActivitiesController = require('../http/Controllers/ActivitiesController');
const {index, getOne, update, remove, create} = ActivitiesController;
const PrivateRoute = require("../http/PrivateRoute");

const express = require('express');
const router = express.Router();
const prefix = '/activities';

router.get('/', index);
router.get('/:id', getOne);
router.post('/create', PrivateRoute, create);
router.put('/update', PrivateRoute, update);
router.delete('/delete/:id', PrivateRoute, remove);

module.exports = {router, prefix};
