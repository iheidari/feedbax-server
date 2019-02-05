var rootRouter = require('./home');
var feedbackRouter = require('./feedback');

var root = [
  { path: '/', route: rootRouter },
  { path: '/feedback', route: feedbackRouter }
];

module.exports = root;
