const wrapper = require("./helpers/wrapper");
const express = require("express");
const error = require("./helpers/error");
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.get(
  "/products",
  wrapper((req, res) => {
    const happenedError = error(401, "Error_1");
    throw happenedError;
  })
);

app.get(
  "/users",
  wrapper((req, res) => {
    const happenedError = error(501, "Error_2");
    throw happenedError;
  })
);

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = app;
