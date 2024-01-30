const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});

const Dish = mongoose.model("mains", DishSchema);
module.exports = Dish;