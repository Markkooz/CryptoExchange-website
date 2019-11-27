// All /genres routes

const express = require('express');
const router = express.Router();

const { getLoggedout } = require('../controllers/logoutController');

router.get('/', getLoggedout);

module.exports = router;