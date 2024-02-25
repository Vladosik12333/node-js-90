const express = require("express");
const ctrl = require("../controllers/product");
const wrapper = require("../helpers/wrapper");
const {
  createProductSchema,
  productIdSchema,
  updateProductSchema,
} = require("../models/product");
const validationBody = require("../helpers/validationBody");
const validationParams = require("../helpers/validationParams");
const auth = require("../middlewares/auth");

const route = express.Router();

route.get("/", wrapper(ctrl.getAll));

route.post("/", auth, validationBody(createProductSchema), wrapper(ctrl.create));

route.get("/:id", validationParams(productIdSchema), wrapper(ctrl.getById));

route.delete(
  "/:id",
  auth,
  validationParams(productIdSchema),
  wrapper(ctrl.deleteById)
);

route.put(
  "/:id",
  auth,
  validationParams(productIdSchema),
  validationBody(updateProductSchema),
  wrapper(ctrl.updateById)
);

module.exports = route;
