const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create } = require("../controllers/order");

// imports from auth controller
const { requireSignin, isAuth } = require("../controllers/auth");

router.post(
  "/order/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  create
);

router.param("userId", userById);

module.exports = router;
