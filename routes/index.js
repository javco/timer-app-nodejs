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

mongoose.model('users', {name: String})()
router.get('/users', function(req, res, next) {
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
});

module.exports = router;
