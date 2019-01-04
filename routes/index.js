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
/*
router.get('/projects/vaporvoid', function(req, res){
  res.render('/projects/vaporvoid', {
    title: 'VaporVoid'
  });
});

router.get('/projects/bluebeard', function(req, res){
  res.render(req.params, {
    title: 'The Tale of Bluebeard'
  });
});

router.get('/projects/website', function(req, res){
  res.render(req.params, {
    title: 'This Website'
  });
});

router.get('/projects/other_projects', function(req, res){
  res.render(req.params, {
    title: 'Other Projects'
  });
});
*/

router.get('/vaporvoid', function(req, res){
  res.render('vaporvoid', {
    title: 'VaporVoid'
  });
});

router.get('/bluebeard', function(req, res){
  res.render('bluebeard', {
    title: 'The Tale of Bluebeard'
  });
});

router.get('/website', function(req, res){
  res.render('website', {
    title: 'Website'
  });
});

router.get('/other_projects', function(req, res){
  res.render('other_projects', {
    title: 'Other Projects'
  });
});

module.exports = router;
