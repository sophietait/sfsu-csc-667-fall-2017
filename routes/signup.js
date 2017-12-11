var express = require('express');
var router = express.Router();
var db = require('../db/index.js');
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
            password: req.body.password,
            player_id: -1,
            balance: 100,
            status: 0
        })
        .then(player => {
          console.log("player created successfully");
          res.redirect('index');
        })
        .catch(error => {
          console.log("player creation error");
          res.redirect('/index');
        });
});

module.exports = router;
