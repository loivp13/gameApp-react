const passport = require("passport");
const User = require("./models/user.js");
const LocalStrategy = require("passport-local").Strategy;
//how to store user in the session
module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
    "local.signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        //use express-validator to check
        console.log("checking for if user exist");
        let { email, address, city, state, zipcode } = req.body;
        User.findOne({ email: email }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(
              null,
              false,
              req.flash("signupErrors", "This email has been taken")
            );
          }
          const newUser = new User();
          newUser.set({
            email,
            password: newUser.encryptPassword(password),
            username,
            address,
            city,
            state,
            zipcode
          });
          newUser.save(function(err, result) {
            if (err) {
              console.log(err);
              return done(err);
            }
            return done(null, newUser);
          });
        });
      }
    )
  );

  passport.use(
    "local.signin",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, done) {
        User.findOne({ username: username }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(
              null,
              false,
              req.flash("loginError", "Incorrect username")
            );
          }
          if (!user.validPassword(password)) {
            return done(
              null,
              false,
              req.flash("loginError", "Incorrect password")
            );
          }
          return done(null, user);
        });
      }
    )
  );
};
