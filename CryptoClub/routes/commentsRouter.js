// All /genres routes

const express = require('express');
const router = express.Router();

const { getAllComments } = require('../controllers/commentsController');

router.get('/', getAllComments);

module.exports = router;