const express = require('express');
const app = express();


app.get('/', (req, res, next) => {
  res.send('hello world and welcome to Travis!')
})


module.exports = app;
