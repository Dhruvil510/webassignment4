const CartData = require("../Model/cartModel");

module.exports.deleteCart = async (req, res) => {
    try {
      const id = req.params.id;
      await CartData.findByIdAndDelete(id);
      res.send({ message: "Cart Deleted" });
    } catch (error) {
      res.status(500).send({ error: "Server Error" });
    }
};

module.exports.addCart = async (req, res) => {
    try {
      const Cart = req.body;
  
      const cartInfo = new CartData(Cart);
      await cartInfo.save();
      res.send(cartInfo);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};

module.exports.fetchCart = async (req, res) => {
  try {
    const display = await CartData.find({});
    res.send(display);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.modifyCart = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const UpdateData = await CartData.findByIdAndUpdate(id, data, { new: true });
    res.send(UpdateData);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
