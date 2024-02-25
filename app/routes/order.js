const express = require("express");
const validationBody = require("../helpers/validationBody");
const { createOrderSchema, getOrderByIdSchema } = require("../models/order");
const wrapper = require("../helpers/wrapper");
const controller = require("../controllers/order");
const validationParams = require("../helpers/validationParams");

const route = express.Router();

route.post("/", validationBody(createOrderSchema), wrapper(controller.create));

route.get("/", wrapper(controller.getAll));

route.get(
  "/:orderId",
  validationParams(getOrderByIdSchema),
  wrapper(controller.getById)
);

route.delete(
  "/:orderId",
  validationParams(getOrderByIdSchema),
  wrapper(controller.deleteById)
);

module.exports = route;
