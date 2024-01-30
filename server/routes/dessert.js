const express = require("express");
const router = express.Router();

const { getDesserts } = require("../controllers/dessert");

router.get("/", getDesserts);

module.exports = router;
