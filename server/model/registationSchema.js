const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    trpe: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
