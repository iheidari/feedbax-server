//external dependancies
const boom = require('boom');

const Feedback = require('../../models/Feedback');

const getFeedbacks = async (page = 1, take = 25, sort, order = 'asc') => {
  try {
    const count = await Feedback.countDocuments();
    const feedbacks = await Feedback.find()
      .limit(take)
      .skip((page - 1) * take)
      .sort({ [sort]: order });
    return { result: feedbacks, count };
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getFeedbackById = async id => {
  try {
    const feedback = await Feedback.findById(id);
    return feedback;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const saveFeedback = async model => {
  try {
    let savedFeedback;
    if (model.id) {
      savedFeedback = updateFeedback(model);
    } else {
      savedFeedback = await createFeedback(model);
    }
    return savedFeedback;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateFeedback = async model => {
  const { ...updateData } = model;
  const update = await Feedback.findByIdAndUpdate(model.id, updateData, {
    new: true
  });
  return update;
};

const createFeedback = async model => {
  const feedback = new Feedback(model);
  return feedback.save();
};

const deleteFeedback = async id => {
  try {
    const feedback = await Feedback.findByIdAndRemove(id);
    return feedback;
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getFeedbacks,
  getFeedbackById,
  saveFeedback,
  deleteFeedback
};
