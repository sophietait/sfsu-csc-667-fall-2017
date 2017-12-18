var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists. Switch to gamelobby");
    res.redirect('/gamelobby');
  } else {
    res.render('index', {title: 'Roulette'});
  }
});

router.post('/', function(req, res) {
        var username = req.body.username,
            password = req.body.password;

        Player.findOne({ where: { username: username } }).then(function (player) {
            if (!player) {
              console.log("login not successful");
              //openUserNotCreatedModal();
              res.redirect('/index');
            } else if (!player.validPassword(password)) {
              console.log("incorrect password");
              //openIncorrectUserModal();
              res.redirect('/index');
            } else {
              console.log("login successful");
              var random_number = Math.round((Math.random() * 10000));
              player.updateAttributes({
                player_id: random_number
              });
              req.session.player = player.dataValues;
              res.redirect('/gamelobby');
            }
        });
    });

module.exports = router;
