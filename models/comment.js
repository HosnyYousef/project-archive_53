const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: String,
  likes: {
    type: Number,
    default: 0,
    required: true, // <-- do we need this?
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);