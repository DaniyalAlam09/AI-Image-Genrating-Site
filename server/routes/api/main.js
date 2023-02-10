const express = require("express");
const router = express.Router();
const { fecthPost, createPost } = require("../../controllers/post");
// const { isAuthenticated } = require("../../middlewares/auth");

// router.post("/", isAuthenticated, createBrand);
router.get("/", fecthPost);
router.post("/", createPost);
// router.get("/:categoryId", getBrand);

module.exports = router;
