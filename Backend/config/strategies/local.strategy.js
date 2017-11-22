const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../../api/Services/UserService');

module.exports = function() {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function(username, password, done) {
        if(!username || !password) {
            done({message: 'Invalid username or password'}, false);
            return;
        }
        Users.findByUserName(username, (err)=>{
            done(err, false);
        }, (user) => {
            if(!user){
                done({message: 'username not found'}, false);
                return;
            }
            if(user.password === password) {
                done(null, user);
            } else {
                done({message: 'Wrong password'}, false);
                return;
            }
        });
    }));
};
