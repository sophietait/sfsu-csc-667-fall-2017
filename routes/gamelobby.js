var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* GET Game Lobby page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('gamelobby', {title: 'Game Lobby'});
  } else {
    res.redirect('index');
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
