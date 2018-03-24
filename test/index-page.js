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
    browser.assert.text('h1', 'Please rate our website:')
  });

});
