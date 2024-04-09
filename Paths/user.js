const express = require("express");
const {
  deleteUser,
  addUser,
  fetchUser,
  modifyUser,
} = require("../Controller/userControl");

const router = express.Router();
router.delete("/user/deleteuser/:id", deleteUser);
router.post("/user/adduser", addUser);
router.get("/user", fetchUser);
router.put("/user/modifyuser/:id", modifyUser);

module.exports = router;