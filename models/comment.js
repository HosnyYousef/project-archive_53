const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true, // do we need curly brackets and 'required here?'
  },
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

module.exports = mongoose.model("Post", CommentSchema);
