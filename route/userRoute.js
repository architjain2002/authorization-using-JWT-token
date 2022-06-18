const express = require("express");
const router = express.Router();

var userController = require("../controller/userController.js");
var userMiddleware = require("../middleware/auth.js");
// register users
router.post("/register", userController.registerUsers);

// login users
router.post("/login", userController.loginUsers);

// to check for the authorization part

router.get("/post", userMiddleware.authorizeToken, userController.userPosts);
module.exports = router;
