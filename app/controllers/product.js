const services = require("../services/product");

const getAll = async (_, res) => {
  const products = await services.getAll();
  res.status(200).json({ products });
};

const create = async (req, res) => {
  const product = await services.create(req.body);
  res.status(201).json({ product });
};

const getById = async (req, res) => {
  const product = await services.getById(req.params.id);
  res.status(200).json({ product });
};

module.exports = {
  getAll,
  create,
  getById
};
