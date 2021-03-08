const express = require('express');
const LoginController = require("../http/Controllers/LoginController");
const router = express.Router();
const prefix = "/login";
const PrivateRoute = require("../http/PrivateRoute");


router.post("/", LoginController.login);
router.post("/create", LoginController.create);
router.get("/:id", PrivateRoute, LoginController.getAdminById);
router.put("/updatepwd", PrivateRoute, LoginController.updatePassword);
router.put("/updateemail", PrivateRoute, LoginController.updateEmail);

module.exports = {router, prefix};