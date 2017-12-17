var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET Forgot Password page. */
router.get('/', function(req, res, next) {
  res.render('forgotpassword', { title: 'Forgot password' });
});

router.post('/', function(req, res, next){
  console.log("ha ha ha");
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
          user: "roulette667@gmail.com",
          pass: "johnrob667"
      }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: "Roulette <roulette667@gmail.com>", // sender address
      to: "laturkaraishvaria@gmail.com", // list of receivers
      subject: "Roulette-Forgot password", // Subject line
      text: "Roulette", // plaintext body
      html: "<b>Here is your new password -"1234"</b>" // html body
  }

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
