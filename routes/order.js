const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create, listOrders } = require("../controllers/order");

// imports from auth controller
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

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

router.get("/order/list/:userId", requireSignin, isAuth, isAdmin, listOrders);

router.param("userId", userById);

module.exports = router;
