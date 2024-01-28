const Product = require("../models/product");
const getAll = async () => {
  const products = await Product.find();
  return products;
};

module.exports = {
  getAll,
};
