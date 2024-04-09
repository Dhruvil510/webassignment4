const express = require("express");
const 
{
  deleteOrder,
  addOrder,
  fetchOrder,
  modifyOrder,
} = require("../Controller/orderControl");

const router = express.Router();

router.delete("/order/deleteOrder/:id", deleteOrder);
router.post("/order/addOrder", addOrder);
router.get("/order", fetchOrder);
router.put("/order/modifyOrder/:id", modifyOrder);


module.exports = router;