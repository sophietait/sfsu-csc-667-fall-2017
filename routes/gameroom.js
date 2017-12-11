var express = require('express');
var router = express.Router();
var app = express();
app.io = require('socket.io')();

/* GET game room. */
router.get('/', function(req, res, next) {
  console.log(req);
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('gameroom', {title: 'Gameroom'});
    console.log("player username: " + req.session.player.username);
    app.io.emit('username', req.session.player.username);
  } else {
    res.redirect('/index');
  }
});

exports.placebets = function placebets() {
  console.log("gameroom placebets");
}

module.exports = router;
