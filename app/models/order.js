const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const orderSchema = new Schema(
  {
    products: { type: [Schema.Types.ObjectId], ref: "product" },
    price: { type: Number },
    quantity: {
      type: Number,
    },
    comments: {
      type: String,
      default: null,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    name: { type: String },
    status: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: false }
);

const createOrderSchema = Joi.object({
  products: Joi.array().required(),
  comments: Joi.string().default(null),
  address: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  name: Joi.string().required(),
});

const Order = model("order", orderSchema);
module.exports = { Order, createOrderSchema };
