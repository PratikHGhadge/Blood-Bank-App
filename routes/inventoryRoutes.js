const express = require("express");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
} = require("../controllers/inventoryController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

// routes
// Add Inventory || Post

router.post("/create-inventory", authMiddelware, createInventoryController);

// get inventory || get
router.get("/get-inventory", authMiddelware, getInventoryController);

// get donars || get
router.get("/get-donars", authMiddelware, getDonarsController);

// get hospitals records || get
router.get("/get-hospitals", authMiddelware, getHospitalsController);

module.exports = router;
