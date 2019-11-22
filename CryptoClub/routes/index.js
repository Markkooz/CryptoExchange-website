// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const userDetailsRouter = require('./userDetailsRouter');
const usersListRouter = require('./usersListRouter');
const cryptoRouter = require('./cryptoRouter');
const loginRouter = require('./loginRouter');
const commentsRouter = require('./commentsRouter');
const addCommentRouter = require('./addCommentRouter');


router.use('/', indexRouter);
router.use('/usersList', usersListRouter);
router.use('/user', userDetailsRouter);
router.use('/crypto', cryptoRouter);
router.use('/login', loginRouter);
router.use('/comments', commentsRouter);
router.use('/addComment', addCommentRouter);

module.exports = router;