const productServices = require('../services/productServices');

// Requesito 1 :
const create = async (req, res, _next) => {
    const { name, quantity } = req.body;

    const createProduct = await productServices.create(name, quantity);

    if (createProduct.err) {
        return res.status(422).json(createProduct);
    }

    res.status(201).json(createProduct);
};

// Requesito 2 :
const getAll = async (_req, res, _next) => {
    const AllProducts = await productServices.getAll();

    if (AllProducts.err) {
        return res.status(422).json(AllProducts);
    }

    return res.status(200).json(AllProducts);
};

const getById = async (req, res, _next) => {
    const { id } = req.params;
    const productById = await productServices.getById(id);

    if (productById.err) {
        return res.status(422).json(productById);
    }

    return res.status(200).json(productById);
};

module.exports = {
    create,
    getAll,
    getById,
};