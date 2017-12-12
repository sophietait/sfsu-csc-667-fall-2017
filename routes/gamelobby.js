var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* GET Game Lobby page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    var myBalance;
    var Player = require('../models/player');
    var currentPlayerUsername = "";
    var currentPlayerBalance = "";

    Player.findOne({ where: { username: req.session.player.username }})
    .then(function (player) {
      if (player) {
        myBalance=player.balance
      }
      currentPlayerUsername = req.session.player.username;
      currentPlayerBalance = myBalance;
    });

    Player.findAll({attributes: ['username', 'balance']})
    .then(function (player) {
      var displayStr = "";
      for(var user of player) {
        displayStr += 'Player ' + user.username + ', Balance ' + user.balance + '\r\r\n\n';

      }
      res.render('gamelobby', {
        title: 'Roulette',
        leaderboard: displayStr,
        username: currentPlayerUsername,
        balance: currentPlayerBalance
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
