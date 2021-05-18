const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById } = require("../controllers/user");
const { generateToken } = require("../controllers/braintree");

// imports from auth controller
const { requireSignin, isAuth } = require("../controllers/auth");

router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);

router.param("userId", userById);

module.exports = router;
