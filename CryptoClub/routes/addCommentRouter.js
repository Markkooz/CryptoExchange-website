// All /genres routes

const express = require('express');
const router = express.Router();

const { setComment } = require('../controllers/addCommentController');

router.get('/', setComment);

module.exports = router;