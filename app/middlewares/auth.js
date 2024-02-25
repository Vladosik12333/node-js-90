const jwt = require("jsonwebtoken");
const error = require("../helpers/error");
const {SECRET, ADMIN_LOGIN} = require("../config");

const auth = async (req, _, next) => {
    try {
        const { authorization = "" } = req.headers;
        const [bearer, token] = authorization.split(" ");

        if (bearer !== "Bearer") throw error(401, "Not authorized");

        const { login } = jwt.verify(token, SECRET);

        if (login !== ADMIN_LOGIN) throw error(401, "Not authorized");

        req.admin = login;
        next();
    } catch (error) {
        error.status = 401;
        next(error);
    }
};

module.exports = auth;