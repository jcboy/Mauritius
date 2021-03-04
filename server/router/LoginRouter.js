const express = require('express');
const LoginController = require("../http/Controllers/LoginController");
const router = express.Router();
const prefix = "/login";
const PrivateRoute = require("../http/PrivateRoute");


router.post("/", LoginController.login);
router.post("/update", PrivateRoute, LoginController.updatePassword);

module.exports = {router, prefix};