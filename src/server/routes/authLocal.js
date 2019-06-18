const express = require("express");
const passport = require("passport");
let router = express.Router();

router.post("/signup", function(req, res, next) {
  passport.authenticate("local.signup", { failureFlash: true }, function(
    err,
    user,
    info
  ) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send({ error: req.flash("signupErrors") });
    }

    res.send(user.username);
  })(req, res, next);
});

router.post("/signin", function(req, res, next) {
  passport.authenticate("local.signin", { failureFlash: true }, function(
    err,
    user,
    info
  ) {
    if (err) {
      return next(err);
    }

    if (!user) {
      console.log(user);
      return res.send({ error: req.flash("loginError") });
    }

    res.send(user.username);
  })(req, res, next);
});
module.exports = router;
