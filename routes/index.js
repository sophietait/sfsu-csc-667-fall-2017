var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roulette' });
});
router.post('/', function(req, res, next) {
  res.render('gamelobby', { title: 'Roulette' });
});
/*
passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ username: username }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}
));


router.post('/',passport.authenticate('local-index', { successRedirect: '/gamelobby',
                                 failureRedirect: '/index',
                                 failureFlash: true }),
                                 function(req, res, next) {
                                  res.render('index', { title: 'Roulette' });
                                }
);
*/
module.exports = router;
