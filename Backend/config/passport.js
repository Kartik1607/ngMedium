const passport = require('passport');

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
