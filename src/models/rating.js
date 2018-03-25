var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RatingSchema = new Schema({
  rating: Number,
  created_at: Date
});

module.exports = mongoose.model('Rating', RatingSchema);
