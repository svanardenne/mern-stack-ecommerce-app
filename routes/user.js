const express = require('express');

// imports signup controller
const { signup } = require('../controllers/user');

// imports signup validator
const { userSignupValidator } = require('../validator');

// router
const router = express.Router();



router.post('/signup', userSignupValidator, signup);

module.exports = router;