// All /genres routes

const express = require('express');
const router = express.Router();

const { getUser } = require('../controllers/userDetailsController');

router.get('/', getUser);

module.exports = router;