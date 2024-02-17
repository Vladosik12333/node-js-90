const wrapper = require("./helpers/wrapper");
const express = require("express");
const error = require("./helpers/error");
const logger = require("morgan");
const cors = require("cors");
const productsRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/product", productsRoute);

app.use("/order", orderRoute);

app.use((error, req, res, next) => {
  const { message = "server internal error", status = 500 } = error;
  res.status(status).json({ message });
});

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = app;
