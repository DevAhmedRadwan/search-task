const { NODE_ENV } = require("../configs/env");

function errorHandler(err, req, res, next) {
  if (NODE_ENV == "development") return res.status(500).json(err);
  return res.status(500).json("Something Went wrong");
}

module.exports = {
  errorHandler,
};
