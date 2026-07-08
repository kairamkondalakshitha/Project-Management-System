const Comment = require("../models/Comment");

// Add Comment
const addComment = async (req, res) => {
  try {
    const { message, task } = req.body;

    const comment = await Comment.create({
      message,
      task,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Comments of a Task
const getComments = async (req, res) => {

  try {

    const comments = await Comment.find({
      task: req.params.taskId,
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: comments.length,
      comments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addComment,
  getComments,
};