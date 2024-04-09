const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  purchaseHistory: String,
  shippingAddress: String,
});

const UserData = mongoose.model("users", userModel);

module.exports = UserData;
