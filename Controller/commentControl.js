const CommentData = require("../Model/commentModel");

module.exports.deleteComment = async (req, res) => {
    try {
      const id = req.params.id;
      await CommentData.findByIdAndDelete(id);
      res.send({ message: "Comment Deleted" });
    } catch (error) {
      res.status(500).send({ error: "Server Error" });
    }
};

module.exports.addComment = async (req, res) => {
    try {
      const Comment = req.body;
  
      const commentInfo = new CommentData(Comment);
      await commentInfo.save();
      res.send(commentInfo);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};

module.exports.fetchComment = async (req, res) => {
  try {
    const display = await CommentData.find({});
    res.send(display);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.modifyComment = async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateData = await CommentData.findByIdAndUpdate(id, req.body, { new: true });
    res.send(UpdateData);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

