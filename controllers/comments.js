const Comment = require('../models/Comment');

// To save the comment in the database and send the user back to the post page.
exports.createComment = async (req, res) => {
await Comment.create({
  comment: req.body.comment,
  user: req.user.id,
  post: req.params.id,
});
  req.flash('info', 'Comment added');
  res.redirect(`/post/${req.params.id}`);
};