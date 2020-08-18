const express = require("express");
const ToDo = require("../models/toDo");
const User = require('../models/users');
const mongoose = require("mongoose");

const toDoRouter = express.Router();

const addToDo = (req, res, next) => {
  const newToDo = {
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    completed: false
  };
  User.update({username : req.params.username}, {$push : 
    {toDos: newToDo
    }

}).then(
    (toDo) => {
      res.status(201).json(toDo);
    }
  ).catch((e) => {
    res.status(404).json({success : false});
  });
  
};

const toggleToDo = (req, res, next) => {
  User.update({username : req.params.username, "toDos._id" : req.body.id}, {
    $set : {"toDos.$.completed" : Boolean(req.body.completed)}
  }).then((d) => {
    res.status(201).json(d);
  }).catch((e) => {
    res.status(404).json({success : false});
  });
}


const getToDos = (req, res, next) => {
  User.find({ username : req.params.username },'toDos', (err, toDos) => {
    if(err) {
      console.log(err); 
      res.status(404).json( {success : false});
    }
    else {
      res.json(toDos);
    }
  });

};

toDoRouter.post("/:username", addToDo);
toDoRouter.get("/:username", getToDos);
toDoRouter.put("/:username", toggleToDo);

module.exports = toDoRouter;
