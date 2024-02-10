const { Product } = require("../models/product");

const getAll = async () => {
  const products = await Product.find();
  return products;
};

const create = async (product) => {
  const productCreated = await Product.create(product);
  return productCreated;
};

const getById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

module.exports = {
  getAll,
  create,
  getById
};
