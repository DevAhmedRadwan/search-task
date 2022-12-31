module.exports = function (customerSchema) {
  customerSchema.statics.aggregateNumberOfOrders = require("./aggregate-number-of-orders");
  customerSchema.statics.aggregateTotalAmountOfOrders = require("./aggregate-total-amount-of-orders");
};
