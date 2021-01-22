const HomeController = require('../../Controller/ControllerHome/homeController');
const {index, update, delete: remove, read, create} = HomeController;

const express = require('express');
const router = express.Router();
const prefix = '/'

// CRUD

// List columns
router.get('/', index);

// Create
// Insertion en bdd
router.post('/', create);

// Read
// Read by Id
router.get('/', read);

// Update
// Update by Id
router.put('/', update);

// Delete
// Delete by Id
router.delete('/', remove);

module.exports = {router, prefix};
