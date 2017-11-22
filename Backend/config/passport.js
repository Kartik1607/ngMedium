const passport = require('passport');
const UserService = require('../api/Services/UserService');

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });

    passport.deserializeUser(function(userName, done) {
        done(null, userName);
    });

    require('./strategies/local.strategy')();
};
