const Browser = require('zombie');

describe('Confirmation page', function() {
  const browser = new Browser();

  before(function(done) {
    browser.visit('/ratings', done);
  });

  it('thanks the user for their feedback', function() {
    browser.assert.text('h1', 'Thanks for your feedback.');
  });

  it('has a back button', function() {
    browser.assert.element('button[id=back]');
  });

});
