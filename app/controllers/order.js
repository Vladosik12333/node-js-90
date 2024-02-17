const services = require("../services/order");

const create = async (req, res) => {
  const order = await services.create(req.body);
  res.status(201).json({ order });
};

const getAll = async (_, res) => {
  const orders = await services.getAll();
  res.status(200).json({ orders });
};

module.exports = { create, getAll };
