const express = require('express');
const bodyParser = require('body-parser');
const login = require('../routes/login/login');
const courses = require('../routes/courses/courses');
const error = require('../middleware/error');
const response = require('../middleware/response');


module.exports = function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/login', login);
  app.use('/courses', courses);
  app.use(response);
  app.use(error);
}

