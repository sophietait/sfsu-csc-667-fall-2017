var express = require('express');
var router = express.Router();

/* return to home page. */
router.get('/', function(req, res, next) {
  res.render('rules', { title: 'Rules' });
});

router.post('/', function(req, res) {
  if (req.cookies.session && !req.session.player) {
    res.clearCookie('session');
  }
});

module.exports = router;
