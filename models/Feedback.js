const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
