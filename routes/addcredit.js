var express = require('express');
var router = express.Router();

/* GET Add Credit page. */
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
      res.render('addcredit', { 
        title: 'Roulette',
        username: req.session.player.username,      
        balance: myBalance,
        p: require('../models/player.js')
       });
    });
  } else {
    res.redirect('/index');
  }
});

module.exports = router;
