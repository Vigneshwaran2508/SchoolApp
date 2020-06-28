var express = require('express');
var router = express.Router();
var axios=require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {name:'VigneshWaran'});
});

router.get('/create', function(req, res, next) {
  res.render('create', {name:'VigneshWaran'});
});

router.get('/edit', function(req, res, next) {
  res.render('edit',{name:'VigneshWaran'});
});

router.get('/delete', function(req, res, next) {
  res.render('delete', {name:'VigneshWaran'});
});

router.get('/list',function(req, res, next) {
  res.render('list', {name:'VigneshWaran'});
});

module.exports = router;
