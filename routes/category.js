const express = require('express');

// router
const router = express.Router();

// imports controllers
const { 
  create,
  categoryById,
  read
} = require('../controllers/category');

// imports from auth controller
const { 
  requireSignin,
  isAuth,
  isAdmin
} = require('../controllers/auth');

// imports signup controller
const { userById } = require('../controllers/user');

router.get('/category/:categoryId',
  read
);

router.post('/category/create/:userId', 
  requireSignin, 
  isAuth, 
  isAdmin, 
  create
);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;