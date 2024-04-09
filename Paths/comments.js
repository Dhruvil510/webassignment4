const express = require("express");
const {
  deleteComment,
  addComment,
  fetchComment,
  modifyComment,
} = require("../Controller/commentControl");

const router = express.Router();

router.delete("/comment/deleteComment/:id", deleteComment);
router.post("/comment/addComment", addComment);
router.get("/comment", fetchComment);
router.put("/comment/modifyComment/:id", modifyComment);


module.exports = router;