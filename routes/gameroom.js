var express = require('express');
var router = express.Router();

/* GET game room. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('gameroom', {title: 'Gameroom'});
  } else {
    res.redirect('/index');
  }
});

module.exports = router;
