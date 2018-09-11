const jwtStrategy = require('passport-jwt').Strategy;
const extractStrategy = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../configs/keys');

const opts = {};
opts.jwtFromRequest = extractStrategy.fromAuthHeaderAsBearerToken();
opts.secret = keys.secret;

module.exports = passport => {
    passport.use(
        new jwtStrategy(opts,(jwt_payload,done)=>{
            User.findById(jwt_payload.id).then(user => {
                if (user){
                    return done(null,user);
                }
                return done(null,false);
            })
            .catch(err => console.log(err));
        })
    );
};