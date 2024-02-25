const error = require("../helpers/error");
const repository = require("../repositories/order");
const repositoryProduct = require("../repositories/product");

const addPriceAndQuantity = async (bodyOrder) => {
  bodyOrder.quantity = bodyOrder.products.length;
  bodyOrder.price = 0;

  const products = await repositoryProduct.getAll(bodyOrder.products);

  products.forEach((product) => (bodyOrder.price += product.price));
};

const create = async (bodyOrder) => {
  bodyOrder.status = false;

  await addPriceAndQuantity(bodyOrder);

  const order = await repository.create(bodyOrder);
  return order;
};

const getAll = async () => {
  const orders = await repository.getAll();
  return orders;
};

const getById = async (orderId) => {
  const order = await repository.getById(orderId);
  if (!order) throw error(400, "Order not found");
  return order;
};

const deleteById = async (orderId) => {
  const order = await repository.deleteById(orderId);
  if (!order) throw error(400, "Order not found");
  return order;
};

const updateById = async (orderId, bodyOrder) => {
  await addPriceAndQuantity(bodyOrder);

  const order = await repository.updateById(orderId, bodyOrder);

  if (!order) throw error(400, "Order not found");
  return order;
};

module.exports = { create, getAll, getById, deleteById, updateById };
