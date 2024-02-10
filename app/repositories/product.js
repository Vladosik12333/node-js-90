const { Product } = require("../models/product");

const getAll = async () => {
  const products = await Product.find();
  return products;
};

const create = async (product) => {
  const productCreated = await Product.create(product);
  console.log(productCreated);
  return productCreated;
};

module.exports = {
  getAll,
  create,
};
