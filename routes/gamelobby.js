var express = require('express');
var router = express.Router();

/* GET Game Lobby page. */
router.get('/', function(req, res, next) {
  res.render('gamelobby', { title: 'Game Lobby' });
});

module.exports = router;
