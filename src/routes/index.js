const express = require('express');
const router = express.Router();
const service = require('../db/service');

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
router.get('/TeamDetail', async function(req, res, next) {
  const staff = await service.getStaff();
  console.log(staff);
  res.render('TeamDetail', { title: 'Express', staff: staff });
});
router.get('/AdminLogin', function(req, res, next) {
  res.render('AdminLogin', { title: 'Express' });
});
module.exports = router;
