/*
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

 GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roulette' });
});

/*
router.post('/', function(req, res, next) {
  console.log(req.body.username);  
  res.render('gamelobby', { title: 'Roulette' });
});

app.post('/', passport.authenticate('local'), function(req, res) {
  res.render('gamelobby', { title: 'Roulette' });
});

router.get('/', function(req, res) {
  req.logout();
  res.render('index', { title: 'Roulette' });
});

app.post('/',passport.authenticate('local', { successRedirect: '/gamelobby',
                                 failureRedirect: '/index',
                                 failureFlash: true })                                                
);


router.post('/',passport.authenticate('local-index', { successRedirect: '/gamelobby',
failureRedirect: '/index',
failureFlash: true }),
function(req, res, next) {
 res.render('index', { title: 'Roulette' });
}                                 
);

module.exports = router;
*/



var express = require('express');
var router = express.Router();
var player = require('../models/player.js');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roulette' });
});

app.post('/', function(req, res) {
        var username = req.body.username,
            password = req.body.password;

        player.findOne({ where: { username: username } }).then(function (player) {
            if (!player) {
              console.log("login not successful");
                res.redirect('/index');
            } else if (!user.validPassword(password)) {
              console.log("incorrect password");
                res.redirect('/index');
            } else {
              console.log("login successful");
                req.session.player = player.dataValues;
                res.redirect('/gamelobby');
            }
        });
    });

/*
app.post('/', passport.authenticate('local', { successRedirect: '/gamelobby',
                                 failureRedirect: '/index',
                                 failureFlash: true })
);
*/

/*
router.post('/',passport.authenticate('local-index', { successRedirect: '/gamelobby',
failureRedirect: '/index',
failureFlash: true }),
function(req, res, next) {
 res.render('index', { title: 'Roulette' });
}
);
*/
module.exports = router;