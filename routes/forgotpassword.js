var express = require('express');
var router = express.Router();

/* GET Forgot Password page. */
router.get('/', function(req, res, next) {
  res.render('forgotpassword', { title: 'Forgot password' });
});

module.exports = router;
