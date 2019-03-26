var express = require('express');
var router = express.Router();

var feedback = require('../controlers/Feedback');

router.get('/', feedback.get);
router.get('/:id', feedback.getById);
router.post('/', feedback.post);
router.delete('/:id', feedback.delete);

module.exports = router;
