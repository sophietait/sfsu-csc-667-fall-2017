var express = require('express');
var router = express.Router();

/* GET Game Lobby page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('gamelobby', {title: 'Game Lobby'});
  } else {
    res.redirect('/index');
  }
});

router.post('/', function(req, res) {
  res.clearCookie('session');
  console.log("User logout");
  res.redirect('/index');
});

module.exports = router;
