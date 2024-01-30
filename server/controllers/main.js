const Main = require("../models/main");

exports.getMains = (req, res) => {
  Main.find()
    .then((mains) => res.json(mains))
    .catch((err) =>
      res.status(404).json({ message: "Main not found", error: err.message })
    );
};
