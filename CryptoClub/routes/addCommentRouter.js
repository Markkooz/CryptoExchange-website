// All /genres routes

const express = require('express');
const router = express.Router();

const { setComment, postComment } = require('../controllers/addCommentController');

router.get('/', setComment);
router.post('/', postComment);

module.exports = router;