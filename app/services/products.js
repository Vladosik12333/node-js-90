const repository = require("../repositories/products");
const getAll = async () => {
  const products = await repository.getAll();
  return products;
};

module.exports = {
  getAll,
};
