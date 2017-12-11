var express = require('express');
var router = express.Router();
var app = express();
app.io = require('socket.io')();

router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
<<<<<<< HEAD
    res.render('gameroom', {
      title: 'Gameroom',
      username: req.session.player.username,
      balance: req.session.player.balance
=======
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
>>>>>>> f03437cd51b87dc409cc899756e1020a598cda41
    });
  } else {
    res.redirect('/index');
  }
});

exports.placebets = function placebets() {
  console.log("gameroom placebets");
}

module.exports = router;
