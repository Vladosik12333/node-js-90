const express = require("express");
const wrapper = require("../helpers/wrapper");
const controller = require("../controllers/admin");
const auth = require("../middlewares/auth");

const route = express.Router();

route.post("/login", wrapper(controller.login));

route.get("/current", auth, wrapper(controller.current));

route.get("/logout", auth, wrapper(controller.logout));

module.exports = route;