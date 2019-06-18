const express = require("express");
let router = express.Router();
let User = require("../models/user.js");

router.post("/addTo", (req, res, next) => {
  console.log(req.body);
  User.find({ username: req.body.userid }, (err, user) => {
    if (err) {
      res.send("Something went wrong with mLab");
    } else if (user.length === 0) {
      res.send("No user found");
    } else {
      console.log(user);
    }
  });
});

module.exports = router;
