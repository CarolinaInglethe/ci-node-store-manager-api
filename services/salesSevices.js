const salesValidations = require('./utils/salesValidation');
const salesModels = require('../models/salesModels');

// Requesito 5 (validacao para o Create):
const create = async (arraySales) => {
  const validateQuantity = salesValidations.validateQuantity(arraySales);
  if (validateQuantity.err) return validateQuantity;

  const validateProductId = await salesValidations.validationProductId(arraySales);
  if (validateProductId.err) return validateProductId;
     
  const productCreated = await salesModels.create(arraySales);
  
  return productCreated;
};

// Requesito 6 :
const getAll = async () => {
  const allProducts = await salesModels.getAll();

  return allProducts;
};

const getById = async (id) => {
  const salesById = await salesModels.getById(id);

  if (!salesById) {
    return {
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    };
  }

  return salesById;
};

module.exports = {
  create,
  getAll,
  getById,
};