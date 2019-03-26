const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdBy: String,
  createdDate: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
