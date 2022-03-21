var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});
router.get('/visitor', function(req, res, next) {
  res.render('visitor', { title: 'Express' });
});
router.get('/TeamsMain', function(req, res, next) {
  res.render('TeamsMain', { title: 'Express' });
});
router.get('/TeamDetail', function(req, res, next) {
  res.render('TeamDetail', { title: 'Express' });
});
router.get('/AdminLogin', function(req, res, next) {
  res.render('AdminLogin', { title: 'Express' });
});
module.exports = router;
