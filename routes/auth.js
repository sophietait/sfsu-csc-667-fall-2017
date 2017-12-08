var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/index', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/index',
            failureRedirect: '/signup'
        }
    ));
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);
    app.post('/index', passport.authenticate('local-index', {
            successRedirect: '/gamelobby',
            failureRedirect: '/index'
        }
    ));
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/index');
}