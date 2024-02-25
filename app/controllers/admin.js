const service = require("../services/admin")

const login = (req, res) => {
    const user = service.login(req.body);
    res.status(200).json({
        user
    });
}

const current = (req, res) => {
    const user = service.current(req.admin);
    res.status(200).json({
        user
    });
}

const logout = (req, res) => {
    service.logout();
    res.status(200);
}

module.exports = {login, current, logout};