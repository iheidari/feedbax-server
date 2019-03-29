const repository = require('../repositories/Feedback');

const get = async (req, res, next) => {
  var page = parseInt(req.query.page);
  var take = parseInt(req.query.take);
  var sort = req.query.sort;
  var order = req.query.order;
  var result = await repository.getFeedbacks(page, take, sort, order);
  res.send(result);
};

const getById = async (req, res, next) => {
  var id = req.params.id;
  res.send(await repository.getFeedbackById(id));
};

const post = async (req, res, next) => {
  var model = req.body;
  var id = req.params.id;
  if (id) model.id = id; //TODO: more horminization between express and fastify implementation
  res.send(await repository.saveFeedback(model));
};

const deleteItem = async (req, res, next) => {
  //unexpected token delete error
  var id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.send('Invalid Id');
  }

  res.send(await repository.deleteFeedback(id));
};

module.exports = { get, getById, post, delete: deleteItem };
