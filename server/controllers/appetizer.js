const Appetizer = require("../models/appetizer");

exports.getAppetizers = (req, res) => {
    Appetizer.find()
    .then((appetizers) => res.json(appetizers))
    .catch((err) =>
      res.status(404).json({ message: "Dessert not found", error: err.message })
    );
};