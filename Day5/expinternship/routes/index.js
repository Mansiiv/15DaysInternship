var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/', function(req, res, next) {
  res.render('master');
});

router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

module.exports = router;
