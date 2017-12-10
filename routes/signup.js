var express = require('express');
var router = express.Router();
var db = require('../db/index.js');
var player_id = 0;
var player = require('../models/player.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.post('/', function(req, res) {
  console.log("add database entry");
  player.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(player => {
          console.log("player created successfully");
            //req.session.player = player.dataValues;
            res.redirect('index');
        })
        .catch(error => {
          console.log("player creation error");
            res.redirect('index');
        });
});

module.exports = router;
