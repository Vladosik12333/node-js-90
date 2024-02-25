const repository = require("../repositories/order");
const repositoryProduct = require("../repositories/product");

const create = async (bodyOrder) => {
  bodyOrder.quantity = bodyOrder.products.length;
  bodyOrder.price = 0;
  bodyOrder.status = false;

  const products = await repositoryProduct.getAll(bodyOrder.products);
  products.forEach(product => bodyOrder.price += product.price);
  
  const order = await repository.create(bodyOrder);
  return order;
};

const getAll = async () => {
  const orders = await repository.getAll();
  return orders;
};

module.exports = { create, getAll };
