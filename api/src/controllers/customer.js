const { querySelector } = require("../services/customer");

async function get(req, res, next) {
  try {
    const criteria = req.query.criteria;
    const operation = req.query.operation;
    const value = req.query.value;
    const customers = await querySelector(criteria, operation, value);
    return res.status(200).json(customers);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  get,
};
