var express = require('express');
var router = express.Router();

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

router.get('/users/:id/:name', function(req, res, next) {
  console.log(req.params, 200)
  res.send(req.params.id, 200)
});

module.exports = router;
