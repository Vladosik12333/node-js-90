const {ADMIN_LOGIN, ADMIN_PASSWORD} = require('../config');

const get = () => {
    return {
        login: ADMIN_LOGIN,
        password: ADMIN_PASSWORD
    }
}

module.exports = {get};