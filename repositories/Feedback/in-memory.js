var util = require('../../src/util');
var feedbacks = require('../../test/mock').feedbacks;

function getFeedbacks(page = 1, take = 10, sort, order = 'asc') {
  const takeLimited = take > 100 ? 100 : take;
  var resultFeedback = [];
  if (sort) {
    resultFeedback = [...feedbacks];
    if (order.toLowerCase() === 'desc') {
      resultFeedback.sort(util.compareByProperty(sort, order));
    } else {
      resultFeedback.sort(util.compareByProperty(sort));
    }
    resultFeedback = util.paging(resultFeedback, page, takeLimited);
  } else {
    resultFeedback = util.paging(feedbacks, page, takeLimited);
  }
  return { result: resultFeedback, count: feedbacks.length };
}

function getFeedbackById(id) {
  var feedback = findById(id, feedbacks);
  return feedback;
}

function saveFeedback(model) {
  let modelToSave = { ...model }; //TODO:deep copy
  if (!modelToSave.id) {
    modelToSave.id = getNewId(feedbacks);
    feedbacks.push(modelToSave);
  } else {
    feedbacks = feedbacks.map(function(feedback) {
      if (feedback.id == modelToSave.id) {
        return model;
      } else {
        return feedback;
      }
    });
  }
  return modelToSave;
}

function deleteFeedback(id) {
  var toDelete;
  feedbacks = feedbacks.filter(function(feedback) {
    if (feedback.id === id) toDelete = feedback;
    return feedback.id !== id;
  });
  return toDelete;
}

function getNewId(feedbacks) {
  return feedbacks.length === 0 ? 1 : feedbacks[feedbacks.length - 1].id + 1;
}

function findById(feedbackId) {
  var id = parseInt(feedbackId);
  return feedbacks.find(function(feedback) {
    return feedback.id === id;
  });
}

module.exports = {
  getFeedbacks,
  getFeedbackById,
  saveFeedback,
  deleteFeedback
};
