const express = require("express");
const validationBody = require("../helpers/validationBody");
const { createOrderSchema } = require("../models/order");
const wrapper = require("../helpers/wrapper");
const controller = require("../controllers/order");

const route = express.Router();

route.post("/", validationBody(createOrderSchema), wrapper(controller.create));

route.get("/", wrapper(controller.getAll));

module.exports = route;
