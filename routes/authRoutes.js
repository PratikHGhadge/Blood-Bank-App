const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddelware");

const router = express.Router();

//routes
router.post("/register", registerController);

// login route
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/currentuser", authMiddleware, currentUserController);

module.exports = router;
