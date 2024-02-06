const mongoose = require("mongoose");

const DessertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Float,
    required: true
  }
});

const Dessert = mongoose.model("desserts", DessertSchema);
module.exports = Dessert;