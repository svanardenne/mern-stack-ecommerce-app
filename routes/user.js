const express = require('express');

// router
const router = express.Router();


// imports signup controller
const { userById } = require('../controllers/user');

// imports from auth controller
const { 
  requireSignin,
  isAuth,
  isAdmin
} = require('../controllers/auth');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});

router.param('userId', userById);


module.exports = router;