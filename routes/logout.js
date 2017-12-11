var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* clear player data and return to home page. */
router.get('/', function(req, res, next) {
  res.redirect('index');
  res.clearCookie('session');
});

module.exports = router;
