const User = require("../models/User");

checkUsernameOrEmailIsExists = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      res
        .status(400)
        .send({ message: "Fail! username not exits in database!" });
      return;
    }
  });
  //email
  User.findOne({
    email: req.body.email,
  }).exec((err, email) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!email) {
      res.status(400).send({ message: "Fail! email not exits in database!" });
      return;
    }
    next();
  });
};

const verifySingIn = {
  checkUsernameOrEmailIsExists,
};

module.exports = verifySingIn;
