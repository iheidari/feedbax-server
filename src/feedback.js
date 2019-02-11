var util = require('./util');

//dummy data for now
var feedbacks = [
  {
    id: 1,
    title: 'Grid',
    description:
      'Material Grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs.'
  },
  {
    id: 2,
    title: 'Breakpoints',
    description:
      'We provide a low-level API that enables the use of breakpoints in a wide variety of contexts.'
  },
  {
    id: 4,
    title: 'useMediaQuery',
    description: 'This is a CSS media query hook for React.'
  },
  {
    id: 5,
    title: 'Hidden',
    description:
      'Hidden component can be used to change the visibility of the elements.'
  },
  {
    id: 7,
    title: 'Sizes',
    description: 'Fancy larger or smaller buttons? Use the size property.'
  }
];

function get(req, res, next) {
  var page = req.query.page || 1;
  var take = req.query.take || 10;
  take = take > 100 ? 100 : take;

  var resultFeedback = [];

  if (req.query.sort) {
    var sort = req.query.sort;
    var order = req.query.order || 'asc';

    resultFeedback = [...feedbacks];
    if (order.toLowerCase() === 'desc') {
      resultFeedback.sort(util.compareByProperty(sort, order));
    } else {
      resultFeedback.sort(util.compareByProperty(sort));
    }
    resultFeedback = util.paging(resultFeedback, page, take);
  } else {
    resultFeedback = util.paging(feedbacks, page, take);
  }

  res.send(resultFeedback);
}

function getById(req, res, next) {
  var id = req.params.id;
  var feedback = findById(id, feedbacks);
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

function findById(feedbackId, feedbacks) {
  var id = parseInt(feedbackId);
  return feedbacks.find(function(feedback) {
    return feedback.id === id;
  });
}

module.exports = { get, getById, post, delete: delete1 };
