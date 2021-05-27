const express = require("express");

// router
const router = express.Router();

// imports user controllers
const {
  userById,
  read,
  update,
  purchaseHistory,
} = require("../controllers/user");

// imports from auth controller
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);
router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);

router.param("userId", userById);

module.exports = router;
