const mongoose = require("mongoose");

const cartModel = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProductData" }],
  quantities: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserData" },
});

const CartData = mongoose.model("cartdata", cartModel);

module.exports = CartData;