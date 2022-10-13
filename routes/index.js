var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express ATN Shop' });
});
router.get('/', function(req, res, next) {
  res.render('login', { title: 'ATN Shop' });
});
router.get('/login', function(req, res, next) {
  res.render('users', { title: 'Welcome to user' });
});

module.exports = router;
