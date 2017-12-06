var express = require('express');
var router = express.Router();
const db = require('../db/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

module.exports = router;