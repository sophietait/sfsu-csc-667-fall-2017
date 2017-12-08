var express = require('express');
var router = express.Router();
const db = require('../db/index.js');
//var player_id = 4;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.username);
  //player_id+=1;
  db.any("INSERT INTO player (player_id, username, email_id, password, balance, state) VALUES ('"+player_id+"','"+req.body.username+"','"+req.body.email+"','"+req.body.password+"',100,0);")
  res.render('index', { title: 'Roulette' });
});

module.exports = router;
