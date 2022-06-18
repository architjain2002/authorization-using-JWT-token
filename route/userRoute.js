const express = require("express");
const router = express.Router();

var userController = require("../controller/userController.js");

// register users
router.post("/register", userController.registerUsers);

// login users
router.post("/login", userController.registerUsers);

module.exports = router;
