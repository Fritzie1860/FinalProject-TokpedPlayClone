// src/controllers/commentController.js
const Comment = require('../models/Comment');

// Get a list of comments for a specific video
const getCommentsByVideo = async (req, res) => {
  try {
    const video_id = req.params.video_id;
    const comments = await Comment.find({ video_id }, '_id username comment timestamp').exec();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch comments.' });
  }
};

// Submit a comment for a video
const submitComment = async (req, res) => {
  try {
    const { username, comment, video_id } = req.body;
    const newComment = new Comment({ username, comment, video_id });
    await newComment.save();
    res.json({ success: true, message: 'Comment submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Unable to submit comment.' });
  }
};

module.exports = {
  getCommentsByVideo,
  submitComment,
};
