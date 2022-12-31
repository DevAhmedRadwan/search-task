const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = new mongoose.Schema({
  CustomerId: {
    type: ObjectId,
    ref: "Customer",
    required: true,
  },
  "Total Amount": {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
});

orderSchema.index({ CustomerId: 1 });

module.exports = orderSchema;
