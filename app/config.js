require("dotenv").config()

const { DB_LINK = '', PORT = 3000, ADMIN_LOGIN='', ADMIN_PASSWORD='', SECRET='' } = process.env;

module.exports = { DB_LINK, PORT, ADMIN_PASSWORD, ADMIN_LOGIN, SECRET };
