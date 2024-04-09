const express = require("express");
const {
  deleteCart,
  addCart,
  fetchCart,
  modifyCart,
} = require("../Controller/cartControl");

const router = express.Router();

router.delete("/cart/deleteCart/:id", deleteCart);
router.post("/cart/addCart", addCart);
router.get("/cart", fetchCart);
router.put("/cart/modifyCart/:id", modifyCart);


module.exports = router;
