var express = require('express');
var router = express.Router();

/* GET Add Credit page. */
router.get('/', function(req, res, next) {
  res.render('addcredit', { title: 'Add credit' });
});
/*
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  var new_amount=
  db.any("ALTER TABLE player, INSERT INTO player (player_id, username, email_id, password, balance, state) VALUES ('"+player_id+"','"+req.body.username+"','"+req.body.email+"','"+req.body.password+"',100,0);")
  res.render('index', { title: 'Roulette' });
});
*/

module.exports = router;
