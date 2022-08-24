const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: {
    type: String,
    required: "username is required"
  },
  email: {
    type: String,
    required: "email is required"
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model("User", User);
