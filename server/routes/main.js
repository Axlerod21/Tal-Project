const express = require("express");
const router = express.Router();

const { getMains } = require("../controllers/main");

router.get("/", getMains);

module.exports = router;
