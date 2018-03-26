var express = require('express');
var router = express.Router();
var RatingController = require('../controllers/ratings');
var ratingController = new RatingController();

router.get('/', ratingController.list);

router.post('/', ratingController.create);

router.get('/:ratingId', ratingController.get);

module.exports = router;
