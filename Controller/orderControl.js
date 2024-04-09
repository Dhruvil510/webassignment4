const OrderData = require("../Model/orderModel");

module.exports.deleteOrder = async (req, res) => {
    try {
      const id = req.params.id;
      await OrderData.findByIdAndDelete(id);
      res.send({ message: "Order Deleted" });
    } catch (error) {
      res.status(500).send({ error: "Server Error" });
    }
};

module.exports.addOrder = async (req, res) => {
    try {
      const Order = req.body;
      const orderInfo = new OrderData(Order);
      await orderInfo.save();
      res.send(orderInfo);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};

module.exports.fetchOrder = async (req, res) => {
  try {
    const id = req.params.id ? { _id: req.params.id } : {};
    const display = await OrderData.find({});
    res.send(display);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.modifyOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const order = req.body;
    const UpdateData = await OrderData.findByIdAndUpdate(id, order, { new: true });
    res.send(UpdateData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


