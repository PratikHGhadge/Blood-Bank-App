const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// CREATE INVENTRY
const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    //validation
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User Not Found");
    }

    // calculations
    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      console.log(requestedBloodGroup);
      const requestedQuantityOfBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      console.log(organisation);
      //  calculate total in BloodQuantity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const toatlIn = totalInOfRequestedBlood[0]?.total || 0;
      console.log("totalInOfRequestedBlood" + toatlIn);
      // calculate total out blood Quantity
      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const toatlOut = totalOutOfRequestedBloodGroup[0]?.total || 0;
      console.log("totalOutOfRequestedBloodGroup" + toatlOut);

      // in & out calc
      const availableQuanityOfBloodGroup = toatlIn - toatlOut;
      console.log("Avilable" + availableQuanityOfBloodGroup);

      // quantity validation
      if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuanityOfBloodGroup} ML of ${requestedBloodGroup.toUpperCase()} is avilable`,
        });
      }
      req.body.hospital = user?._id;
    } else if (req.body.inventoryType == "in") {
      req.body.donar = user?._id;
    }
    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "new blood recored added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In create Inventory API",
      error,
    });
  }
};

// GET ALL BLOOD RECORDS
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "get all recoreds successfully ",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in get All inventory ",
      error,
    });
  }
};

// GET DONAR RECORDS
const getDonarsController = async (req, res) => {
  try {
    const organisation = req.body.userId;
    // find donar?
    const donarId = await inventoryModel.distinct("donar", { organisation });
    // console.log(donarId)
    const donars = await userModel.find({ _id: { $in: donarId } });
    // console.log(donars);
    return res.status(200).send({
      success: true,
      message: "Donar Record Fetched Successfully",
      donars,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donar records",
      error,
    });
  }
};
// GET DONAR RECORDS
const getHospitalsController = async (req, res) => {
  try {
    const organisation = req.body.userId;
    // find donar?
    const hospitalId = await inventoryModel.distinct("hospital", {
      organisation,
    });
    // console.log(donarId)
    const hospitals = await userModel.find({ _id: { $in: hospitalId } });
    // console.log(donars);
    return res.status(200).send({
      success: true,
      message: "Donar Record Fetched Successfully",
      hospitals,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in hospitals records",
      error,
    });
  }
};

module.exports = {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
};
