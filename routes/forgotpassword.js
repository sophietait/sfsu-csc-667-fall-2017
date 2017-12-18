var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var Player = require('../models/player.js');
var bcrypt = require('bcrypt-nodejs');


/* GET Forgot Password page. */
router.get('/', function(req, res, next) {
  res.render('forgotpassword', { title: 'Forgot password' });
});

router.post('/', function(req, res, next){
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
          user: "roulette667@gmail.com",
          pass: "johnrob667"
      }
  });

  var randomNewPassword = Math.floor(Math.random() * 1000000000)+99999;
  const salt = bcrypt.genSaltSync();
  var newpassword = bcrypt.hashSync(randomNewPassword, salt);

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: "Roulette <roulette667@gmail.com>", // sender address
      to: req.body.email,// list of receivers
      subject: "Roulette-Forgot password", // Subject line
      text: "Roulette", // plaintext body
      html: "<b>Here is your new password - "+randomNewPassword // html body
  }

  Player.findOne({ where: { email: req.body.email } }).then(function (player) {
    if (!player) {
      console.log("Could not find player");
      res.redirect('/signup');
    } else {
      player.updateAttributes({
        password: newpassword
      });
    }
    });

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
          res.redirect('/forgotpassword');
      }else{
          console.log("Message sent: " + response.message);
          res.redirect('/index');
      }

      // if you don't want to use this transport object anymore, uncomment following line
      //smtpTransport.close(); // shut down the connection pool, no more messages
  });




});

module.exports = router;
