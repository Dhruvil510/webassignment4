const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number,
});

const ProductData = mongoose.model("productData", productModel);

module.exports = ProductData;
