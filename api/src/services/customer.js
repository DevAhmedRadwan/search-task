const customerModel = require("../models/customer");

function querySelector(criteria, operation, value) {
  switch (criteria) {
    case "orders":
      return customerModel.aggregateNumberOfOrders(
        queryBuilder(operation, value)
      );
    case "ordersTotal":
      return customerModel.aggregateTotalAmountOfOrders(
        queryBuilder(operation, value)
      );
    default:
      const query = {};
      query[criteria] = queryBuilder(operation, value);
      return customerModel.find(query);
  }
}

function queryBuilder(operation, value) {
  const match = {};
  switch (operation) {
    case "contains":
      match["$regex"] = new RegExp(value);
      match["$options"] = "i";
      break;
    case "greaterthan":
      match["$gt"] = parse(value);
      break;
    case "lessthan":
      match["$lt"] = parse(value);
      break;
    default:
      match["$eq"] = parse(value);
      break;
  }
  return match;
}

function parse(value) {
  return isNaN(value) ? value : Number(value);
}

module.exports = {
  querySelector,
};
