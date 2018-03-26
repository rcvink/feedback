const Browser = require('zombie');

describe('Confirmation page', function() {
  const browser = new Browser();
  var mockDate;

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  beforeEach(function(done) {
    browser.pressButton('button[id=very-happy]', done);
    mockDate = new Date();
  })

  it('loads successfully', function() {
    browser.assert.success();
  });

  it('thanks the user for their feedback', function() {
    browser.assert.text('h1', 'Thanks for your feedback.');
  });

  it('states the rating\'s score and date', function() {
    browser.assert.text('p', `Your rating of 3 out of 3 was stored on ${mockDate}`);
  })

  it('has a back button', function() {
    browser.assert.element('button[id=back]');
  });

});
