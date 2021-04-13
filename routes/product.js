const express = require("express");

// router
const router = express.Router();

// imports controllers
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
} = require("../controllers/product");

// imports from auth controller
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// imports signup controller
const { userById } = require("../controllers/user");

// CRUD Routes
router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

// List routes
router.get("/products", list);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/products/photo/:productId", photo);

// Params and middleware
router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
