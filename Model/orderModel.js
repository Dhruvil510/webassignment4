const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
  products: { type: mongoose.Schema.Types.ObjectId, ref: "ProductData" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserData" },
  orderDate: { type: Date, default: Date.now },
  quantities: Number,
  totalCost: Number,
});

const OrderData = mongoose.model("orderdatas", orderModel);

module.exports = OrderData;
