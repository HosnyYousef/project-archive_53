const router = require('express').Router();
const commentsController = require('../controllers/comments');
const { ensureAuth } = require('../middleware/auth');

router.post('/createComment/:id', ensureAuth, commentsController.createComment);
module.exports = router;