const productServices = require('../services/productServices');

// Requesito 1 :
const create = async (req, res, _next) => {
    const { name, quantity } = req.body;

    const createProduct = await productServices.create(name, quantity);

    if (createProduct.err) {
        return res.status(422).json(createProduct);
    }

    return res.status(201).json(createProduct);
};

module.exports = {
    create,
};