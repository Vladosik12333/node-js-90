const wrapper = require("./helpers/wrapper");
const express = require("express");
const error = require("./helpers/error");
const logger = require("morgan");
const cors = require("cors");
const productsRoute = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/products", productsRoute);
app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = app;
