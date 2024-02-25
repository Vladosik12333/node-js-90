const { Product } = require("../models/product");

const getAll = async (productIds) => {
  const filter = productIds ? { _id: productIds } : {};
  const products = await Product.find(filter);
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

const deleteById = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};

const updateById = async (id, newProductBody) => {
  const product = await Product.findByIdAndUpdate(id, newProductBody, {
    new: true,
  });

  return product;
};

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById,
};
