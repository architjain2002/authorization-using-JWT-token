require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

var userRouter = require("./route/userRoute.js");

app.use("/home", userRouter);

module.exports = app;
