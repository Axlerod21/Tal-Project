require("dotenv").config();
const express = require("express");
const cors = require("cors");
const appetizerRouter = require("./routes/appetizer");
const mainRouter = require("./routes/main");
const dessertRouter = require("./routes/dessert");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/dishes/appetizers", appetizerRouter);
app.use("/dishes/mains", mainRouter);
app.use("/dishes/desserts", dessertRouter);

// setting up port
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
