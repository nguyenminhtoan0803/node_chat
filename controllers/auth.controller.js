const config = require("../config/auth.config");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = async (req, res) => {
  await User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
      a;
    }
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(500).send({ message: "password is not correct" });
    }

    require.session.token = token;
    return res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "you signout" });
  } catch (err) {
    this.next(err);
  }
};
