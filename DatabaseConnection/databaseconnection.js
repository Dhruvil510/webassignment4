const mongoose = require("mongoose");

const DataBase =
  "mongodb+srv://assignment:8jUoahKSL0suDTtq@cluster0.xeipe5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DataBase)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));
