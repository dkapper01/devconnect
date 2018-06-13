const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../../models/User");

// @routes  GET api/users/test
// @desc    Tests users routes
// @access  Public
router.post("/test", (req, res) =>
  res.json({
    msg: "Users test"
  })
);

// @routes GET api/users/register
// @desc Register users
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400);
    }
  });

  const avatar = gravatar.url(req.body.email, {
    s: "200",
    r: "pg",
    d: "d"
  });
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    avatar,
    password: req.body.password
  });

  newUser.save();

  res.json(newUser);
});

module.exports = router;
