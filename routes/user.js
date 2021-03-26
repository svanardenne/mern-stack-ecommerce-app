const express = require('express');

// imports signup controller
const { signup, signin } = require('../controllers/user');

// imports signup validator
const { userSignupValidator } = require('../validator');

// router
const router = express.Router();



router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);

module.exports = router;