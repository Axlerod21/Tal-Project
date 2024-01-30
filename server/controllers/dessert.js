const Dessert = require("../models/dessert");

exports.getDesserts = (req, res) => {
  Dessert.find()
    .then((desserts) => res.json(desserts))
    .catch((err) =>
      res.status(404).json({ message: "Dessert not found", error: err.message })
    );
};