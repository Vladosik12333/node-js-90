const { Order } = require("../models/order");

const create = async (bodyOrder) => {
  const order = await Order.create(bodyOrder);
  return order;
};

const getAll = async () => {
  const orders = await Order.find().populate("products");
  return orders;
};

const getById = async (orderId) => {
  const order = await Order.findById(orderId).populate("products");
  return order;
};

const deleteById = async (orderId) => {
  const order = await Order.findByIdAndDelete(orderId);
  return order;
};

const updateById = async (orderId, orderBody) => {
  const order = await Order.findByIdAndUpdate(orderId, orderBody, {
    new: true,
  });
  return order;
};

module.exports = { create, getAll, getById, deleteById, updateById };
