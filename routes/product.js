const express = require('express');

// router
const router = express.Router();

// imports controllers
const { 
  create,
  productById,
  read,
  remove,
  update,
  list
} = require('../controllers/product');

// imports from auth controller
const { 
  requireSignin,
  isAuth,
  isAdmin
} = require('../controllers/auth');

// imports signup controller
const { userById } = require('../controllers/user');

router.get('/product/:productId', read)
router.post('/product/create/:userId', 
  requireSignin, 
  isAuth, 
  isAdmin, 
  create
);
router.delete('/product/:productId/:userId',
  requireSignin, 
  isAuth, 
  isAdmin,
  remove
);
router.put('/product/:productId/:userId',
  requireSignin, 
  isAuth, 
  isAdmin,
  update
);

router.get('/products', list);

router.param('userId', userById);
router.param('productId', productById)

module.exports = router;