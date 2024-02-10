const express = require("express");
const ctrl = require("../controllers/product");
const wrapper = require("../helpers/wrapper");
const { createProductSchema, getProductSchema } = require("../models/product");
const validationBody = require("../helpers/validationBody");
const validationParams = require("../helpers/validationParams");

const route = express.Router();

route.get("/", wrapper(ctrl.getAll));

route.post("/", validationBody(createProductSchema), wrapper(ctrl.create));

route.get("/:id", validationParams(getProductSchema), wrapper(ctrl.getById));

module.exports = route;
