const { response } = require("express");
const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");
//GET BLOOD DATA
const bloodGroupDetailController = async (req, res) => {
  try {
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
    const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    // get single blood group
    await Promise.all(
      bloodGroups.map(async (bloodGroup) => {
        // Count Total In
        const toatlIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: { _id: null, total: { $sum: "$quantity" } },
          },
        ]);

        // cont total out
        const toatlOut = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: { _id: null, total: { $sum: "$quantity" } },
          },
        ]);
        // calculate total
        const avilableBlood =
          (totalIn[0]?.total || 0) - (toatlOut[0]?.total || 0);
        // Push data
        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total,
          toatlOut: toatlOut[0]?.total,
          avilableBlood,
        });
      })
    );
    return response.status(200).send({
      success: true,
      message: "Blood Group Data fetch Successfully",
      bloodGroupData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in blood group data analytics",
    });
  }
};
module.exports = { bloodGroupDetailController };
