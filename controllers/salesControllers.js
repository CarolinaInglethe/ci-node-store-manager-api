const salesServices = require('../services/salesSevices');

// Requesito 5:
const create = async (req, res, _next) => {
    const createdSales = await salesServices.create(req.body);
    
    if (createdSales.err) {
      return res.status(422).json(createdSales);
    }

    res.status(200).json(createdSales);
};

// Requesito 6:
const getAll = async (_req, res, _next) => {
    const sales = await salesServices.getAll();

    return res.status(200).json({ sales });
};

const getById = async (req, res, _next) => {
    const { id } = req.params;
    const salesById = await salesServices.getById(id);

    if (salesById.err) {
        return res.status(404).json(salesById);
    }

    return res.status(200).json(salesById);
};

// Requesito 7 :
const update = async (req, res, _next) => {
  const { id } = req.params;

  const updateSales = await salesServices.update(id, req.body);

  if (updateSales.err) {
    return res.status(422).json(updateSales);
  }

  return res.status(200).json(updateSales);
};

module.exports = {
    create,
    getAll,
    getById,
    update,
};