// All /genres routes

const express = require('express');
const router = express.Router();

const { getReg, postReg } = require('../controllers/registerController');

router.get('/', getReg);
router.post('/', postReg);

module.exports = router;