var rootRouter = require('./root');
var usersRouter = require('./users');

var root = [
  { path: '/', route: rootRouter },
  { path: '/users', route: usersRouter }
];

module.exports = root;
