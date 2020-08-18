const express = require("express");
const User = require('../models/users');
const mongoose = require("mongoose");

const UserRouter = express.Router();

const addUser = (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    toDos : []

  });
  newUser.save().then((user) => {
    res.status(201).json(user);
  });
  
}; 

const getUsers = (req, res, next) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(404).json({ success: false }));
};

UserRouter.get('/', getUsers);
UserRouter.post('/', addUser);

module.exports = UserRouter;