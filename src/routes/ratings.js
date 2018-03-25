var express = require('express');
var Rating = require('../models/rating');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ratings');
});

router.post('/', function(req, res) {
  var rating = new Rating({
    rating: req.body.rating,
    created_at: new Date()
  });
  rating.save();
  res.redirect('/ratings');
});

module.exports = router;
