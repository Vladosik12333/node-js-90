const repository = require("../repositories/product");
const error = require("../helpers/error");

const getAll = async () => {
  const products = await repository.getAll();
  return products;
};

const create = async (product) => {
  const productCreated = await repository.create(product);
  return productCreated;
};

const getById = async (id) => {
  const product = await repository.getById(id);
  if (!product) {
    throw error(400, `Product with ${id} not found`);
  }
  return product;
};

module.exports = {
  getAll,
  create,
  getById
};
