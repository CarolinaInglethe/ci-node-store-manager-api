const salesServices = require('../services/salesSevices');

// Requesito 5:
const create = async (req, res) => {
      const createdSales = await salesServices.create(req.body);
    
      if (createdSales.err) {
        return res.status(422).json(createdSales);
      }

      console.log('err');
      return res.status(200).json(createdSales);
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

module.exports = {
    create,
    getAll,
    getById,
};