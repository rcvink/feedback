var express = require('express');
var Rating = require('../models/rating');
var router = express.Router();

router.post('/', function(req, res) {
  var rating = new Rating({
    rating: req.body.rating,
    created_at: new Date()
  });
  rating.save();
  res.redirect(`/ratings/${rating._id}`);
});

router.get('/:ratingId', function(req, res) {
  Rating.findOne({ _id: req.params.ratingId }, function(err, rating) {
    if (err) {
      res.render('error', { error: err });
    } else {
      res.render('confirmation', { rating: rating.rating, date: rating.created_at });
    };
  });
});

module.exports = router;
