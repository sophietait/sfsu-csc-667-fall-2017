var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roulette' });
});

router.get('/logInData', function(req, res, next) {
  //db.any(`SELECT ("username", "password") FROM player`)
  db.any(`SELECT username, password FROM player`)

//.then( _ => db.any(`SELECT * FROM test_table`) )
.then( results => res.json( results ) )
.catch( error => {
console.log( error )
res.json({ error })
});
});

module.exports = router;
