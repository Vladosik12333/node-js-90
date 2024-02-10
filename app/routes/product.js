const express = require("express");
const ctrl = require("../controllers/product");
const wrapper = require("../helpers/wrapper");
const { createProductSchema } = require("../models/product");
const validationBody = require("../helpers/validationBody");

const route = express.Router();

route.get("/", wrapper(ctrl.getAll));

route.post("/", validationBody(createProductSchema), wrapper(ctrl.create));

module.exports = route;
