var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.post('/saveSignUpData', function(req, res, next) {
  db.any(`INSERT INTO player ("username", "password", "email_id") VALUES (`+user+`,`+pass+`,`+email+`)`)
.then( _ => db.any(`SELECT * FROM game`) )
.then( results => res.json( results ) )
.catch( error => {
console.log( error )
res.json({ error })
});
});

module.exports = router;
