var feedbacks = [
  {
    id: 1,
    title: 'first title',
    description: 'description for first option in the list'
  }
];

function get(req, res, next) {
  res.send(feedbacks);
}

function getById(req, res, next) {
  var id = req.params.id;
  var feedback = findById(id);
  res.send(feedback);
}

function post(req, res, next) {
  var model = req.body;

  if (!model.id) {
    model.id = getNewId(feedbacks);
    feedbacks.push(model);
  } else {
    var recordUpdated = false;
    feedbacks = feedbacks.map(function(feedback) {
      if (feedback.id == model.id) {
        recordUpdated = true;
        return model;
      } else {
        return feedback;
      }
    });
    if (recordUpdated) {
    } else {
    }
  }
  res.send(model);
}

function delete1(req, res, next) {
  var id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.send('Invalid Id');
  }
  var toDelete;
  feedbacks = feedbacks.filter(function(feedback) {
    if (feedback.id === id) toDelete = feedback;
    return feedback.id !== id;
  });
  res.send(toDelete);
}

function getNewId(feedbacks) {
  return feedbacks.length === 0 ? 1 : feedbacks[feedbacks.length - 1].id + 1;
}

function findById(id, feedbacks) {
  return feedbacks.find(function(feedback) {
    return feedback.id === id;
  });
}

module.exports = { get, getById, post, delete: delete1 };
