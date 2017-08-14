var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TimerApp' });
  //console.log(req.query)
  //res.send(200)
  //res.send(404)
  /*res.send({
  	users: [ 'Javi', 'Ana', 'Regina' ]
  })*/
});

router.get('/users', function(req, res, next) {
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
});
router.get('/user/:_id', function(req, res, next) {
  mongoose.model('users').findById(req.params._id, function(err, users) {
    res.send(users);
  });
});

router.get('/times', function(req, res, next) {
  mongoose.model('times').find(function(err, times) {
    res.send(times);
  });
});
router.get('/times/:userId', function(req, res, next) {
  mongoose.model('times').find(function(err, times) {
    mongoose.model('times').populate(times, {path: 'user'}, function(err, times) {
      res.send(times);
    });
  });
});


module.exports = router;
