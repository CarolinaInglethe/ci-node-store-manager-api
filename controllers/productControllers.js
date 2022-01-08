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
const getAll = async (_req, res, _next) => res.status(200)
.json({ message: 'retorna todos produtos' });

const getById = async (req, res, _next) => {
    const { id } = req.params;
    if (Number(id)) {
      return res.status(200)
        .json({ message: 'retorna produto de determinado id' }); 
    }
};
module.exports = {
    create,
    getAll,
    getById,
};