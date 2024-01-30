const mongoose = require("mongoose");

const DessertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});

const Dessert = mongoose.model("desserts", DessertSchema);
module.exports = Dessert;