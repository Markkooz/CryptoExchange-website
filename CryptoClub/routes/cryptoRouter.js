// All /genres routes

const express = require('express');
const router = express.Router();

const { getCrypto } = require('../controllers/cryptoController');

router.get('/', getCrypto);

module.exports = router;