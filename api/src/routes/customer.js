const { Router } = require("express");

const customerController = require("../controllers/customer");

const router = Router();

router.get("/", customerController.get);

module.exports = router;
