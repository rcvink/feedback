var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ratings');
})

router.post('/', function(req, res) {
  res.redirect('/ratings')
});

module.exports = router;
