const mongoose = require("mongoose");

const orderDetailsSchema = require("./schemas/order-details");

module.exports = mongoose.model(
  "OrderDetails",
  orderDetailsSchema,
  "OrderDetails"
);
