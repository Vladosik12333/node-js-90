const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema(
  {
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
  },
  { versionKey: false, timestamps: false }
);

const Product = model("product", productSchema);

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().default(null),
  size: Joi.string().valid("small", "medium", "large").default("medium"),
  weight: Joi.number().required(),
  popular: Joi.boolean().default(false),
  vegetarian: Joi.boolean().default(false),
  image: Joi.string().default(""),
});

module.exports = { Product, createProductSchema };
