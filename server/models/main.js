const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Float,
    required: true
  }
});

const Dish = mongoose.model("mains", DishSchema);
module.exports = Dish;