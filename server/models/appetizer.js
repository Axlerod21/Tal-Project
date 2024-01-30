const mongoose = require("mongoose");

const AppetizerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});

const Appetizer = mongoose.model("appetizers", AppetizerSchema);
module.exports = Appetizer;