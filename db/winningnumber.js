var express = require("express");
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  db.any(`INSERT INTO game ("winning_number") VALUES (`+winningNumber+`)`)
.then( _ => db.any(`SELECT * FROM game`) )
.then( results => res.json( results ) )
.catch( error => {
console.log( error )
res.json({ error })
});
});
module.exports = router;
