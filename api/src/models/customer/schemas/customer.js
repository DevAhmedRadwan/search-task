const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  Job: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

module.exports = customerSchema;
