// All /genres routes

const express = require('express');
const router = express.Router();

const { getLogin, postLogin } = require('../controllers/loginController');

router.get('/', getLogin);
router.post('/', postLogin);

module.exports = router;