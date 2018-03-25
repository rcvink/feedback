process.env.NODE_ENV = 'test';

const assert = require('assert');
var Rating = require('../src/models/rating');

describe('Rating', function() {

  var rating;
  var mockRating = 2;
  var mockDate = new Date('February 25, 2018 03:24:00');

  beforeEach(function() {
    rating = new Rating({
      rating: mockRating,
      created_at: mockDate
    });
  });

  it('has a rating score', function() {
    assert.equal(rating.rating, mockRating);
  });

  it('has date of creation', function() {
    assert.equal(rating.created_at, mockDate);
  });

});
