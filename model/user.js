const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  gender: String,
  dob: Date,
  doj: Date,
  description: String,
  role: String,
  department: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;

