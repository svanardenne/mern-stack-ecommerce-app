const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create, listOrders, getStatusValues } = require("../controllers/order");

// imports from auth controller
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// Imports from product controller
const { decreaseQuantity } = require("../controllers/product");

// Create order route
router.post(
  "/order/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

// Get order list
router.get("/order/list/:userId", requireSignin, isAuth, isAdmin, listOrders);

// fetches all the status values from enum
router.get(
  "/order/status-values/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  getStatusValues
);

// Fetches user with id provided from front end in params
router.param("userId", userById);

module.exports = router;
