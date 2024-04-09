const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "ProductData" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserData" },
  rating: Number,
  images: [String],
  text: String,
});

const CommentData = mongoose.model("comments", commentModel);

module.exports = CommentData;
