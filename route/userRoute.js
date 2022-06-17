const express = require("express");
const router = express.Router();

var userController = require("../controller/userController.js");

router.get("/register", userController.registerUsers);

module.exports = router;
