var Rating = require('../models/rating');

var RatingController = function() {};

RatingController.prototype.list = function(req, res) {
  Rating.find({}, 'rating created_at')
    .exec(function (err, ratingsList) {
      if (err) {
        res.render('error', { error: 'hello' });
      } else {
        res.render('ratings', { ratingsList: ratingsList });
      }
    });
};

RatingController.prototype.create = function(req, res) {
  var rating = new Rating({
    rating: req.body.rating,
    created_at: new Date()
  });
  rating.save();
  res.redirect(`/ratings/${rating._id}`);
};

RatingController.prototype.get = function(req, res) {
  Rating.findOne({ _id: req.params.ratingId }, function(err, rating) {
    if (err) {
      res.render('error', { error: err });
    } else {
      res.render('confirmation', { rating: rating.rating, date: rating.created_at });
    }
  });
};

module.exports = RatingController;
