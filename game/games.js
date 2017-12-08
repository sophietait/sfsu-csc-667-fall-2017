var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next)) {
response.render('games/home');
//res.send('hoaljds');
});
//router.get('/all', (request, response))
