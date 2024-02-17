const repository = require("../repositories/order");

const create = async (bodyOrder) => {
  const order = await repository.create(bodyOrder);
  return order;
};

const getAll = async () => {
  const orders = await repository.getAll();
  return orders;
};

module.exports = { create, getAll };
