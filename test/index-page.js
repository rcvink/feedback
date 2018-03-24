const assert = require('assert');
const Browser = require('zombie');
const app = require('../src/app');
const http = require('http').createServer(app).listen(4000);

Browser.localhost('example.com', 4000);

describe('Index page', function() {
  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('loads successfully', function() {
    browser.assert.success();
  });

});
