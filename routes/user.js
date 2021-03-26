const express = require('express');

// imports signup controller
const { signup } = require('../controllers/user');

// router
const router = express.Router();



router.post('/signup', signup);

module.exports = router;