const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  inventoryType: {
    type: String,
    required: [true, "inventory type is required"],
    enum: ["in", "out"],
  },
  bloodGroup: {
    type: String,
    required: [true, "blood group is required"],
    enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
  },
  quantity: {
    type: Number,
    required: [true, "blood quanity is require"],
  },
  organisation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: [true, "organisation is required"],
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.inventoryType == "out";
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
