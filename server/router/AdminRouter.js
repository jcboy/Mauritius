const express = require('express');
const AdminController = require("../http/Controllers/LoginController");
const router = express.Router();
const prefix = "/login";

router.post('/', AdminController.signIn);
router.post('/update', AdminController.update);

module.exports = {router, prefix};