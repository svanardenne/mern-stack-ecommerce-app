const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");

// imports from auth controller
const { requireSignin, isAuth } = require("../controllers/auth");

router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);
router.post(
  "/braintree/payment/:userId",
  requireSignin,
  isAuth,
  processPayment
);

router.param("userId", userById);

module.exports = router;
