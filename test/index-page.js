const Browser = require('zombie');

describe('Index page', function() {
  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('loads successfully', function() {
    browser.assert.success();
  });

  it('asks the user for feedback', function() {
    browser.assert.text('h1', 'Please rate our website:');
  });

  it('has a button to list of ratings', function() {
    browser.assert.element('button[id=to-ratings]');
  });

  it('has a feedback form', function() {
    browser.assert.element('form[id=feedback]');
  });

  describe("feedback form has a", function() {

    it('very negative response', function() {
      browser.assert.element('button[id=very-unhappy]')
    });

    it('slightly negative response', function() {
      browser.assert.element('button[id=slightly-unhappy]')
    });

    it('slightly positive response', function() {
      browser.assert.element('button[id=slightly-happy]')
    });

    it('very positive response', function() {
      browser.assert.element('button[id=very-happy]')
    });

  });

  describe('selecting a response', function() {

    beforeEach(function(done) {
      browser.pressButton('button[id=very-happy]', done);
    })

    it('redirects the user', function() {
      browser.assert.redirected();
    });

  });

});
