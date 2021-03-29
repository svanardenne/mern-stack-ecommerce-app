const express = require('express');

// router
const router = express.Router();

// imports controllers
const { 
  create
} = require('../controllers/category');

// imports from auth controller
const { 
  requireSignin,
  isAuth,
  isAdmin
} = require('../controllers/auth');

// imports signup controller
const { userById } = require('../controllers/user');

router.post('/category/create/:userId', 
requireSignin, 
isAuth, 
isAdmin, 
create);

router.param('userId', userById);

module.exports = router;