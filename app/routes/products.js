const express = require("express");
const ctrl = require("../controllers/products");
const wrapper = require("../helpers/wrapper");

const route = express.Router();

route.get("/", wrapper(ctrl.getAll));

module.exports = route;
