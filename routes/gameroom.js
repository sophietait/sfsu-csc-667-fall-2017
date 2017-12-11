var express = require('express');
var router = express.Router();
var app = express();
app.io = require('socket.io')();

/* GET game room. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('gameroom', {
      title: 'Gameroom',
      username: req.session.player.username,
      balance: req.session.player.balance
    });
  } else {
    res.redirect('/index');
  }
});

exports.placebets = function placebets() {
  console.log("gameroom placebets");
}

module.exports = router;
