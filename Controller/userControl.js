const UserData = require("../Model/userModel");

module.exports.deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      await UserData.findByIdAndDelete(id);
      res.send({ message: "User deleted" });
    } catch (error) {
      res.status(500).send({ error: "Server Error" });
    }
  };

module.exports.addUser = async (req, res) => {
    try {
      const User = req.body;
      const userInfo = new UserData(User);
      await userInfo.save();
      res.send(userInfo);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

module.exports.fetchUser = async (req, res) => {
  try {
    const display = await UserData.find({});
    res.send(display);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.modifyUser = async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateData = await UserData.findByIdAndUpdate(id, req.body, { new: true });
    res.send(UpdateData);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};


