const feedbackController = require('../../controllers/feedback');
const documentation = require('../../models/Feedback');

const routes = [
  { method: 'GET', url: '/api/feedback', handler: feedbackController.get },
  {
    method: 'GET',
    url: '/api/feedback/:id',
    handler: feedbackController.getById
  },
  {
    method: 'POST',
    url: '/api/feedback',
    handler: feedbackController.post,
    schema: documentation.schema
  },
  { method: 'PUT', url: '/api/feedback/:id', handler: feedbackController.post },
  {
    method: 'DELETE',
    url: '/api/feedback/:id',
    handler: feedbackController.delete
  }
];

module.exports = routes;
