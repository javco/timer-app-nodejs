var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var User = require('../models/users')
var Time = require('../models/times')
var Task = require('../models/tasks')


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

/* USERS API */
router.get('/api/users', function(req, res, next) {
  User.getUsers(function(err, users){
    if(err){
      throw err; 
    }
    res.send(users);
  });
});

router.get('/api/user/:_id', function(req, res, next) {
  User.getUserById(req.params._id, function(err, user){
    if(err){
      throw err; 
    }
    res.send(user);
  });
});

router.post('/api/users', function(req, res) {
  var user = req.body;
  User.addUser(user, function(err, user){
    if(err){
      throw err; 
    }
    res.send(user);
  });
});

/* TASKS API */
router.get('/api/tasks', function(req, res, next) {
  Task.getTasks(function(err, tasks){
    if(err){
      throw err; 
    }
    res.send(tasks);
  });
});

router.get('/api/task/:_id', function(req, res, next) {
  Task.getTaskById(req.params._id, function(err, task){
    if(err){
      throw err; 
    }
    res.send(task);
  });
});

router.post('/api/tasks', function(req, res) {
  var task = req.body;
  Task.addTask(task, function(err, task){
    if(err){
      throw err; 
    }
    res.send(task);
  });
});

router.put('/api/tasks/:_id', function(req, res) {
  var id = req.params._id;
  var task = req.body;
  Task.updateTask(id, task, {}, function(err, task){
    if(err){
      throw err; 
    }
    res.send(req.body);
  });
});

router.delete('/api/tasks/:_id', function(req, res) {
  var id = req.params._id;
  Task.deleteTask(id, function(err, task){
    if(err){
      throw err; 
    }
    res.send(task);
  });
});

/* TIMES API */
router.get('/api/times', function(req, res, next) {
  Time.getTimes(function(err, times){
    if(err){
      throw err; 
    }
    res.send(times);
  });
});
router.get('/api/time/:_id', function(req, res, next) {
  Time.getTimeById(req.params._id,function(err, time){
    if(err){
      throw err; 
    }
    res.send(time);
  });
});

/*router.get('/times/:userId', function(req, res, next) {
  mongoose.model('times').find(function(err, times) {
    mongoose.model('times').populate(times, {path: 'user'}, function(err, times) {
      res.send(times);
    });
  });
});*/

router.post('/api/times', function(req, res) {
  var time = req.body;
  Time.addTime(time, function(err, time){
    if(err){
      throw err; 
    }
    res.send(time);
  });
});

router.put('/api/times/:_id', function(req, res) {
  var id = req.params._id;
  var time = req.body;
  Time.updateTime(id, time, {}, function(err, time){
    if(err){
      throw err; 
    }
    res.send(req.body);
  });
});

router.delete('/api/times/:_id', function(req, res) {
  var id = req.params._id;
  Time.deleteTime(id, function(err, time){
    if(err){
      throw err; 
    }
    res.send(time);
  });
});



module.exports = router;
