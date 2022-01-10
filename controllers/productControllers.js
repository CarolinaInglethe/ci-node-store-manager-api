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
    const products = await productServices.getAll();

    return res.status(200).json({ products });
};

const getById = async (req, res, _next) => {
    const { id } = req.params;
    const productById = await productServices.getById(id);

    if (productById.err) {
        return res.status(422).json(productById);
    }

    return res.status(200).json(productById);
};

// Requesito 3 :
const update = async (req, res, _next) => {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const updateProduct = await productServices.update(id, name, quantity);

    if (updateProduct.err) {
        return res.status(422).json(updateProduct);
    }

    return res.status(200).json(updateProduct);
};

// Requesito 4 :
const deleteProduct = async (req, res, _next) => {
    const { id } = req.params;

    const deleteProductById = await productServices.deleteProduct(id);

    if (deleteProductById.err) {
        return res.status(422).json(deleteProductById);
    }

    return res.status(200).json(deleteProductById);
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteProduct,
};