const express = require("express");
const mongoose = require("mongoose");
var User = require("../model/user.js"); //obtaining the user model as User

// for registering the users
exports.registerUsers = async function (req, res) {
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.Sendstatus(400).send("All input is required");

      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.Sendstatus(409).send("User Already Exist. Please Login");
      }

      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });

      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;

      // return new user
      res.Sendstatus(201).json(user);
    }
  } catch (err) {
    res.Sendstatus(400);
    console.log(err);
  }
};

// for existing users to login
exports.loginUsers = async function (req, res) {};
