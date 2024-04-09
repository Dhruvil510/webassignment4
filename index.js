const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
require("./DatabaseConnection/databaseconnection");
const user = require("./Paths/user");
const product = require("./Paths/product");
const comment = require("./Paths/comments");
const cart = require("./Paths/cart");
const order = require("./Paths/order");

app.use(bodyParser.json());
app.use(express.json());

app.use("/data", user);
app.use("/data", product);
app.use("/data", comment);
app.use("/data", cart);
app.use("/data", order);

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
