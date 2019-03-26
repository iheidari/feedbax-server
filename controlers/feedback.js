const repository = require('../repositories/Feedback');

function get(req, res, next) {
  var page = req.query.page;
  var take = req.query.take;
  var sort = req.query.sort;
  var order = req.query.order;

  res.send(repository.getFeedbacks(page, take, sort, order));
}

function getById(req, res, next) {
  var id = req.params.id;
  res.send(repository.getFeedbackById(id));
}

function post(req, res, next) {
  var model = req.body;
  res.send(repository.saveFeedback(model));
}

function deleteItem(req, res, next) {
  //unexpected token delete error
  var id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.send('Invalid Id');
  }

  res.send(repository.deleteFeedback(id));
}

module.exports = { get, getById, post, delete: deleteItem };
