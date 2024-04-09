const express = require("express");
const 
{
  deleteProduct,
  addProduct,
  fetchProduct,
  modifyProduct,
} = require("../Controller/productControl");

const router = express.Router();

router.delete("/product/deleteProduct/:id", deleteProduct);
router.post("/product/addProduct", addProduct);
router.get("/product", fetchProduct);
router.put("/product/modifyProduct/:id", modifyProduct);

module.exports = router;