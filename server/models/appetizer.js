const mongoose = require("mongoose");

const AppetizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  }
});

const Appetizer = mongoose.model("appetizers", AppetizerSchema);
module.exports = Appetizer;