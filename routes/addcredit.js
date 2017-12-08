var express = require('express');
var router = express.Router();

/* GET Add Credit page. */
router.get('/', function(req, res, next) {
  res.render('addcredit', { title: 'Add credit' });
});

module.exports = router;
