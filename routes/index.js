var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roulette' });
});

app.post('/',passport.authenticate('local', { successRedirect: '/gamelobby',
                                 failureRedirect: '/index',
                                 failureFlash: true })                                                
);

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