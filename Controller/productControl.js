const ProductData = require("../Model/productModel");

module.exports.deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      await ProductData.findByIdAndDelete(id);
      res.send({ message: "Product Deleted" });
    } catch (error) {
      res.status(500).send({ error: "Server Error" });
    }
  };

module.exports.addProduct = async (req, res) => {
    try {
      const Product = req.body;
      const productInfo = new ProductData(Product);
      await productInfo.save();
      res.send(productInfo);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};

module.exports.fetchProduct = async (req, res) => {
  try {
    const display = await ProductData.find({});
    res.send(display);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.modifyProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateData = await ProductData.findByIdAndUpdate(id, req.body, { new: true });
    res.send(UpdateData);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};


