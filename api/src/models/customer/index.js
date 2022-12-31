const mongoose = require("mongoose");

const customerSchema = require("./schemas/customer");

require("./statics")(customerSchema);

module.exports = mongoose.model("Customer", customerSchema, "Customer");
