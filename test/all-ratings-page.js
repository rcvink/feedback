const Browser = require('zombie');

describe('All ratings page', function() {
  const browser = new Browser();

  beforeEach(function(done) {
    browser.visit('/ratings', done);
  });

  it('loads successfully', function() {
    browser.assert.success();
  });

  it('has a table of ratings', function() {
    browser.assert.element('table[id=ratings-list]')
  });

  it('has a back button', function() {
    browser.assert.element('button[id=back]');
  });

  describe('within table of ratings', function() {

    it('has a score header', function() {
      browser.assert.element('th[id=score-header]');
    });

    it('has a date header', function() {
      browser.assert.element('th[id=date-header]');
    });

  });

});
