const mongoose = require("mongoose");

const DessertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Dessert = mongoose.model("desserts", DessertSchema);
module.exports = Dessert;