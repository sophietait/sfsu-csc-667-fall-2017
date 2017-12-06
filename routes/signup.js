var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.post('/index', function(req, res, next) {

  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);

  db.any("INSERT INTO `player`(`username`,`password`, `email_id`) VALUES ('"+req.body.name+"','"+req.body.password+"','"+req.body.email+"')")
  
  //db.any(`INSERT INTO player ("username", "password", "email_id") VALUES (`+user+`,`+pass+`,`+email+`)`)
.then( _ => db.any(`SELECT * FROM player`) )
.then( results => res.json( results ) )
.catch( error => {
console.log( error )
res.json({ error })
});
});

module.exports = router;
