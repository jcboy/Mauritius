const HomeController = require('../http/Controllers/HomeController');
const {index, update, delete: remove, read, create} = HomeController;

const express = require('express');
const router = express.Router();
const prefix = '/'

router.get('/', index);

router.post('/', create);

router.get('/', read);

module.exports = {router, prefix};
