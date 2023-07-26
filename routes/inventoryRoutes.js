const express = require("express");
const createInventoryController = require("../controllers/inventoryController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

// routes
// Add Inventory || Post

router.post("/create-inventory", authMiddelware, createInventoryController);
module.exports = router;
