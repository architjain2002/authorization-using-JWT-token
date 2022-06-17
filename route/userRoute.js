const express = require("express");
const router = express.Router();

var userController = require("../controller/userController.js");

router.post("/register", userController.registerUsers);

module.exports = router;
