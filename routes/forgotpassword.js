var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET Forgot Password page. */
router.get('/', function(req, res, next) {
  res.render('forgotpassword', { title: 'Forgot password' });
});

router.post('/send', function(req, res, next){
  var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'leiruss8@gmail.com',
      pass: 'll'
    }
  });
  var mailOp = {
    from: 'Roulette 667 - <roulette667@gmail.com>',
    to: 'laturkaraishvaria@gmail.com',
    subject: 'Roulette - Forgot your password?',
    text: 'Have you forgotten your password of Roulette? Your password is: ',
    html: '<h2> Your new password is: </h2>'
  };
  transport.sendMail(mailOp, function (error, info){
    if(error){
      console.log('Forgot password: Email could not be sent! \n' + error);
    }
    else{
      console.log('Forgot password: Email sent successfully! '+ info.response );
      alert("Email sent successfully!");
      res.redirect('/index');
    }
  });
});


module.exports = router;
