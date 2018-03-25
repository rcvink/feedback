process.env.NODE_ENV = 'test';

var prepare = require('mocha-prepare');
var assert = require('assert');
var Browser = require('zombie');
var http = require('http');
var mongoose = require('mongoose');
var app = require('../src/app');
var server = http.createServer(app);
server.listen(4000);
Browser.localhost('example.com', 4000);

prepare(function (done) {
  done();
}, function (done) {
  mongoose.disconnect();
  server.close(done);
});
