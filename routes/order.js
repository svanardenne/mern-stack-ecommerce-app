const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create } = require("../controllers/order");

// imports from auth controller
const { requireSignin, isAuth } = require("../controllers/auth");

// Imports from product controller
const { decreaseQuantity } = require("../controllers/product");

router.post(
  "/order/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.param("userId", userById);

module.exports = router;
