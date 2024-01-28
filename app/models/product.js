const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String },
  price: {
    type: Number,
  },
  description: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "medium",
  },
  weight: {
    type: Number,
  },
  popular: {
    type: Boolean,
    default: false,
  },
  vegetarian: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "",
  },
});

const Product = model("product", productSchema);
module.exports = Product;
