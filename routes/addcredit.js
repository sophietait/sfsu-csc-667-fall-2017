var express = require('express');
var router = express.Router();

/* GET Add Credit page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('addcredit', { 
      title: 'Roulette',
      username: req.session.player.username,      
      balance: req.session.player.balance,
      p: require('../models/player.js')
     });
  } else {
    res.redirect('/index');
  }
});

module.exports = router;
