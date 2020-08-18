const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require("mongoose");
const path = require('path');
const toDosRouter = require('./routes/todos');
const userRouter = require('./routes/users');

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


try {
    mongoose.connect(
        `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@todo-app.mxnm3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
}
catch(e) {
    console.log(e);
}



const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/todos', toDosRouter);
app.use('/api/v1/users', userRouter)
app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});



app.listen(3001, () => { 
    console.log('Server is running...') ;
});
