const repository = require("../repositories/product");

const getAll = async () => {
  const products = await repository.getAll();
  return products;
};

const create = async (product) => {
  const productCreated = await repository.create(product);
  return productCreated;
};

module.exports = {
  getAll,
  create,
};
