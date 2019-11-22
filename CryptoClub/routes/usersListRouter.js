// All /genres routes

const express = require('express');
const router = express.Router();

const { getAllusers } = require('../controllers/usersListController');

router.get('/', getAllusers);

module.exports = router;