const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const orderDetailsSchema = new mongoose.Schema({
  OrderId: {
    type: ObjectId,
    ref: "Order",
    required: true,
  },
  Item: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
});

module.exports = orderDetailsSchema;
