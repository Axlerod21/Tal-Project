const express = require("express");
const router = express.Router();

const { getAppetizers } = require("../controllers/appetizer");

router.get("/", getAppetizers);

module.exports = router;
