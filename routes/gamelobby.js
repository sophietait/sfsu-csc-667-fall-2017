var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* GET Game Lobby page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    var myBalance;
    var Player = require('../models/player');
    Player.findOne({ where: { username: req.session.player.username }})
    .then(function (player) {
      if (player) {
        myBalance=player.balance
      }
      res.render('gamelobby', { 
        title: 'Roulette',
        username: req.session.player.username,      
        balance: myBalance
       });
    });
  } else {
    res.redirect('/index');
  }
});

router.post('/', function(req, res) {
  console.log("user logout");
  Player.findOne({ where: { username: req.session.player.username } }).then(function (player) {
      if (player) {
        player.updateAttributes({
          player_id: -1
        });
      }
  });
  res.clearCookie('session');
  res.redirect('index');
});

module.exports = router;
