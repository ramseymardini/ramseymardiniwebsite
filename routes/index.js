var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ramsey Mardini\'s Website' });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About Me'
  });
});

router.get('/links', function(req, res){
  res.render('links', {
    title: 'Links + Github'
  });
});

module.exports = router;
