const express = require('express');
const router = express.Router();
const ActivitiesController = require('../http/Controllers/ActivitiesController');
const PrivateRoute = require("../http/PrivateRoute");
const prefix = '/activities';

router.get('/', ActivitiesController.index);
router.get('/:id', ActivitiesController.getOne);
router.post('/', PrivateRoute, ActivitiesController.store);
router.put('/update/id', PrivateRoute, ActivitiesController.update);
router.delete('/delete/:id', PrivateRoute, ActivitiesController.remove);

module.exports = {router, prefix};
