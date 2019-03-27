var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/feedbackdb')
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

routes.forEach(function(route) {
  app.use(route.path, route.route);
});

module.exports = app;
