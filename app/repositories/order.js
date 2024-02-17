const { Order } = require("../models/order");

const create = async (bodyOrder) => {
  const order = await Order.create(bodyOrder);
  return order;
};

const getAll = async () => {
  const orders = await Order.find().populate("products");
  return orders;
};

module.exports = { create, getAll };
