const { Router } = require("express");

const router = Router();

router.use("/customer", require("./customer"));

module.exports = router;
