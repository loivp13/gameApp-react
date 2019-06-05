const express = require("express");
const passport = require("passport");
let router = express.Router();

router.post("/", passport.authenticate("local.signup"), (req, res, next) => {
  res.send("hi");
});

export default router;
