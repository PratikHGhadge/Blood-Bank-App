const express = require("express");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

// routes
// Add Inventory || Post
router.post("/create-inventory", authMiddelware, createInventoryController);

// get inventory || get
router.get("/get-inventory", authMiddelware, getInventoryController);

// get recent inventory || get
router.get(
  "/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

// get inventory Hospital || get
router.post(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

// get donars || get
router.get("/get-donars", authMiddelware, getDonarsController);

// get hospitals records || get
router.get("/get-hospitals", authMiddelware, getHospitalsController);

// get organisation records || get
router.get("/get-organisation", authMiddelware, getOrganisationController);

// get organisation records || get
router.get(
  "/get-organisation-for-hospital",
  authMiddelware,
  getOrganisationForHospitalController
);

module.exports = router;
