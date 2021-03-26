const express = require('express');

// imports signup controller
const { signup, signin, signout } = require('../controllers/user');

// imports signup validator
const { userSignupValidator } = require('../validator');

// router
const router = express.Router();



router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;