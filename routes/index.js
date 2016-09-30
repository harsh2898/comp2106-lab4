var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab4' });
});

router.get('/harsh', function(req, res, next){
  res.render('harsh', { title: 'Harsh'});
});

router.get('/jitendra', function(req, res, next){
  res.render('jitendra', { title: 'Jitendra'});
});

router.get('/jagruti', function(req, res, next){
  res.render('jagruti', { title: 'Jagruti'});
});

router.get('/kavya', function(req, res, next){
  res.render('kavya', { title: 'Kavya'});
});

module.exports = router;
