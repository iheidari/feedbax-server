const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/feedbackdb')
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

module.exports = mongoose;
