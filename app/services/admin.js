const {get} = require("../repositories/admin");
const error = require("../helpers/error");
const jwt = require("jsonwebtoken");
const {SECRET} = require("../config");

const login = (adminBody) => {
    const adminData = get();
    if(adminData.login === adminBody.login && adminData.password === adminBody.password) {
        const token = jwt.sign({
            login: adminData.login
        }, SECRET, { expiresIn: "5d" });
        return {
            token,
            login: adminData.login
        };
    } else {
        throw error(400, 'Password or login is wrong');
    }
}

const current = (login) => {
    return login;
}

const logout = () => {
    return true;
}

module.exports = {login, current, logout};