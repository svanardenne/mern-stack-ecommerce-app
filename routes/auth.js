const express = require("express");

// router
const router = express.Router();

// imports controllers
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");

// imports signup validator
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
