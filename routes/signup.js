var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.post('/index', function(req, res, next) {
  db.any(`INSERT INTO player ("username", "password", "email_id") VALUES (`+user+`,`+pass+`,`+email+`)`)
.then( _ => db.any(`SELECT * FROM game`) )
.then( results => res.json( results ) )
.catch( error => {
console.log( error )
res.json({ error })
});
});

module.exports = router;


/*
var express = require('express');
var app = express();
var ejs = require('ejs');
var pg = require('pg');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 


        var conString = process.env.DATABASE_URL;
        var client = new pg.Client(conString);
        client.connect();

app.get('/',function(req,res,next){
res.sendfile('views/forms.html');
});

app.post('/myaction', function(req, res) {

console.log('req.body');
console.log(req.body);
res.write('You sent the name "' + req.body.name+'".\n');
res.write('You sent the Email "' + req.body.email+'".\n');
res.write('You sent the City "' + req.body.city+'".\n');
res.write('You sent the Pincode "' + req.body.pincode+'".\n');
res.end()

client.query("Insert into record (name,email,city,pincode) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.city+"','"+req.body.pincode+"')",function(err, result)      
{                                                      
  if (err)
     throw err;
});
});
app.listen(3000);
console.log('Example app listening at port:3000');
*/