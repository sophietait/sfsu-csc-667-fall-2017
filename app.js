if (process.env.NODE_ENV === 'development') {
   require('dotenv').config();
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var index = require('./routes/index');
var users = require('./routes/users');
var tests = require('./routes/tests');
var signup = require('./routes/signup');
var forgotpassword = require('./routes/forgotpassword');
var gamelobby = require('./routes/gamelobby');
var addcredit = require('./routes/addcredit');
var gameroom = require('./routes/gameroom');
var rules = require('./routes/rules');
var logout = require('./routes/logout');

var place_bets = 0;
var winning_number = -1;

var app = express();
app.io = require('socket.io')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'session',
  secret: 'gayatripise',
  resave: false,
  saveUninitialized: false,
  maxAge: 60000
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/index', index);
app.use('/users', users);
app.use('/tests', tests);
app.use('/signup', signup);
app.use('/forgotpassword', forgotpassword);
app.use('/gamelobby', gamelobby);
app.use('/addcredit', addcredit);
app.use('/gameroom', gameroom);
app.use('/rules', rules);
app.use('/logout', logout);
app.use('/placebets', gameroom);
app.use('/holdbets', gameroom);
app.use('/updatescore', gameroom);
app.use('/winningnumber', gameroom);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// error handler
app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

// start listen with socket.io
app.io.on("connection", function(socket) {
  console.log("server socket received connection message: " + socket);

  socket.on("new message", function(msg) {
    console.log("new message: " + msg);
    app.io.emit("chat message", msg);
  });

  socket.on("new message lobby", function(msg) {
    console.log("new message: " + msg);
    app.io.emit("chat message lobby", msg);
  });

  socket.on("new credit value", function(bal, user) {
    console.log("jiji new balance: " + bal);
    var Player = require('./models/player');
    Player.findOne({ where: { username: user }}).then(function (player) {
      if (player) {
        player.updateAttributes({
          balance: bal
        });
      }
    });
    app.io.emit("creditt", bal);
  });

  socket.on("new balance value", function(bal, user) {
    var Player = require('./models/player');
    Player.findOne({ where: { username: user }}).then(function (player) {
      if (player) {
        player.updateAttributes({
          balance: bal
        });
      }
    });
    app.io.emit("betting credit", bal, user);
  });

  socket.on('gameroom status poll', function(status) {
    if(status != place_bets) {
      console.log(status + " != " + place_bets);
      app.io.emit('gameroom status update', place_bets);
    }
  });

  socket.on('get winning number', function(number) {
    winning_number = Math.round((Math.random() * 36));
    console.log("send winning number to client: "+winning_number);
    app.io.emit('current winning number', winning_number);
  });
});

/*
gameLoop();
setInterval(function () {
  gameLoop();
}, 60000);

function gameLoop() {
  console.log("Roulette: place your bets");
  place_bets = 0;

  setTimeout(function () {
    console.log("Roulette: hold your bets");
    place_bets = 1;
  }, 50000);

  setTimeout(function () {
    console.log("Roulette: players update your scores");
    place_bets = 2;
  }, 55000);
}
*/

var timer = setInterval(function () {
  if(place_bets == 0) {
    console.log("Roulette: place your bets");
    place_bets = 1;
  } else if(place_bets == 1) {
    console.log("Roulette: hold your bets");
    place_bets = 2;
  } else if(place_bets == 2) {
    console.log("Roulette: updating balances");
    place_bets = 0;
  }
}, 20000);

module.exports = app;
