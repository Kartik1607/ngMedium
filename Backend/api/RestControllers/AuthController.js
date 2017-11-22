const Users = require('../Services/UserService');
const colors = require('colors');
const passport = require('passport');

module.exports = function(app) {

    app.post('/users', (req,res) => {
        Users.save(req.body, (err) => {
            console.log(colors.red(err));
            res.send(err);
        }, (user) => {
            req.login(user, function(err) {
                if(err){
                    console.log(colors.red(err));
                    res.send(err);
                }
                return res.redirect(`/api/users/username/${user.username}`);
            });
        });
    });

    app.post('/login', function(req, res, next) {
        passport.authenticate('local', function(err, user) {
            if (err) { res.send(err); return; }
            req.login(user, function(err) {
                if(err){
                    console.log(colors.red(err));
                    res.send(err);
                }
                return res.redirect(`/api/users/username/${user.username}`);
            });
        })(req, res, next);
    });
};
