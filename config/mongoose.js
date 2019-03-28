const mongoose = require('mongoose');
const config = {
  autoIndex: false,
  useNewUrlParser: true
};
mongoose
  .connect('mongodb://localhost/feedbackdb', config)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

module.exports = mongoose;
