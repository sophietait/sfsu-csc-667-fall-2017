var express = require('express');
var router = express.Router();
var app = express();
app.io = require('socket.io')();

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
      res.render('gameroom', { 
        title: 'Roulette',
        username: req.session.player.username,      
        balance: myBalance
       });
    });
  } else {
    res.redirect('/index');
  }
});

exports.placebets = function placebets() {
  console.log("gameroom placebets");
}

module.exports = router;
