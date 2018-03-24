process.env.NODE_ENV = 'test';

const assert = require('assert');
const Browser = require('zombie');
const app = require('../src/app');
const http = require('http');
const server = http.createServer(app);
server.listen(4000);

Browser.localhost('example.com', 4000);

describe('Index page', function() {
  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  after(function(done) {
    server.close(done);
  });

  it('loads successfully', function() {
    browser.assert.success();
  });

  it('asks the user for feedback', function() {
    browser.assert.text('h1', 'Please rate our website:');
  });

  it('has a feedback form', function() {
    browser.assert.element('form');
  });

  describe("feedback form has a", function() {

    it('very negative response', function() {
      browser.assert.element('form input[id=very-unhappy]')
    });

    it('slightly negative response', function() {
      browser.assert.element('form input[id=slightly-unhappy]')
    });

    it('slightly positive response', function() {
      browser.assert.element('form input[id=slightly-happy]')
    });

    it('very positive response', function() {
      browser.assert.element('form input[id=very-happy]')
    });

  });

  describe('selecting a response', function() {

    beforeEach(function(done) {
      browser.pressButton('form input[id=very-happy]', done);
    })

    it('redirects the user', function() {
      browser.assert.redirected();
    });

  });

});
