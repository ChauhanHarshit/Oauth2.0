const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const user = require('../models/google-user');
// const user1 = require('../models/facebook-user');
const User = require('../models/user');
const session = require('express-session');

passport.serializeUser((user,done) =>{
    done(null,user.id);
});

passport.deserializeUser((id,done) =>{
    User.findById(id).then((user) =>{
        done(null,user);
    })
})

passport.use("google",
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile,done) => {
        User.findOne({googleId:profile.id}).then((currentUser) => {
            if(currentUser){
                console.log(currentUser);
                done(null,currentUser)
            }
            else{
                new User({
                username: profile.displayName,
                googleId: profile.id
                  }).save().then((newUser) =>{
                 console.log(newUser)
                   }).catch(err =>{console.log(err)
                    done(null,currentUser);
                })
            }
        })
        
    })
);


passport.use("facebook",
    new FacebookStrategy({
        // options for facebook strategy
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: '/auth/facebook/redirect'
    }, (accessToken, refreshToken, profile,done) => {
        User.findOne({facebookId:profile.id}).then((currentUser) => {
            if(currentUser){
                console.log(currentUser);
                done(null,currentUser)
            }
            else{
                new User({
                username: profile.displayName,
                facebookId: profile.id
                  }).save().then((newUser) =>{
                 console.log(newUser)
                   }).catch(err =>{console.log(err)
                    done(null,currentUser);
                })
            }
        })
        
    })
);