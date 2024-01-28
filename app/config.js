require("dotenv").config()

const { DB_LINK = '', PORT = 3000 } = process.env;

module.exports = { DB_LINK, PORT };
