// Middleware/Authmiddleware.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3001/google/callbacks", 
    passReqToCallback: true
},
    function (req, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

module.exports = passport;
