/*

if (process.env.NODE_ENV === 'development') {
   require('dotenv').config();
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');
var tests = require('./routes/tests');
var signup = require('./routes/signup');
var forgotpassword = require('./routes/forgotpassword');
var gamelobby = require('./routes/gamelobby');
var addcredit = require('./routes/addcredit');
var gameroom = require('./routes/gameroom');
var rules = require('./routes/rules');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

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

module.exports = app;
*/


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
 //var LocalStrategy = require('passport-local').Strategy;
 var PostgreSqlStore = require('connect-pg-simple')(session);
 //var connect = require('connect');
 
 var index = require('./routes/index');
 var users = require('./routes/users');
 var tests = require('./routes/tests');
 var signup = require('./routes/signup');
 var forgotpassword = require('./routes/forgotpassword');
 var gamelobby = require('./routes/gamelobby');
 var addcredit = require('./routes/addcredit');
 var gameroom = require('./routes/gameroom');
 var rules = require('./routes/rules');
 
 var app = express();
 
 // view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'jade');
 
 // uncomment after placing your favicon in /public
 //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(cookieParser());
 
 // initialize express-session to allow us track the logged-in user across sessions.
 app.use(session({
   store: new PostgreSqlStore({
     conString: process.env.DATABASE_URL
   }),
   key: 'session',
   secret: 'gayatripise',
   resave: false,
   saveUninitialized: false
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
 
 // This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
 // This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
 app.use((req, res, next) => {
   console.log("mayuresh 1");
     if (req.cookies.session && !req.session.player) {
         res.clearCookie('session');
     }
     next();
 });
 
 // middleware function to check for logged-in users
 var sessionChecker = (req, res, next) => {
   console.log("mayuresh 2");
     if (req.session.player && req.cookies.session) {
       console.log("Session exists. Switch to gamelobby");
         res.redirect('/gamelobby');
     } else {
         next();
     }
 };
 
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
 
 module.exports = app;