const services = require('../services/products');

const getAll = async (req, res) => {
    const products = await services.getAll();
    res.status(200).json({ products });
};

module.exports = {
    getAll,
};
