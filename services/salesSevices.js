const salesValidations = require('./utils/salesValidation');
const salesModels = require('../models/salesModels');

// Requesito 5 (validacao para o Create):
const create = async (arraySales) => {
  const validateQuantity = salesValidations.validateQuantity(arraySales);
  if (validateQuantity.err) return validateQuantity;

  const validateProductId = salesValidations.validationProductId(arraySales);
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

// Requesito 7 :
const update = async (id, arraySales) => {
  const validateQuantity = salesValidations.validateQuantity(arraySales);
  if (validateQuantity.err) return validateQuantity;

  const updateProduct = await salesModels.update(id, arraySales);
  
  return updateProduct;
}; 

module.exports = {
  create,
  getAll,
  getById,
  update,
};