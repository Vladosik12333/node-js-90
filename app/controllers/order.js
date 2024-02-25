const services = require("../services/order");

const create = async (req, res) => {
  const order = await services.create(req.body);
  res.status(201).json({ order });
};

const getAll = async (_, res) => {
  const orders = await services.getAll();
  res.status(200).json({ orders });
};

const getById = async (req, res) => {
  const order = await services.getById(req.params.orderId);
  res.status(200).json({ order });
};

const deleteById = async (req, res) => {
  const order = await services.deleteById(req.params.orderId);
  res.status(200).json({ order });
};

module.exports = { create, getAll, getById, deleteById };
