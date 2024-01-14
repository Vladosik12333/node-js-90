const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  try {
    throw new Error("myError");
  } catch (error) {
    res.status(500).json({ message: "products" });
  }
});

app.get("/users", (req, res) => {
  try {
    throw new Error("myError");
  } catch (error) {
    res.status(500).json({ message: "users" });
  }
});

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = app;
