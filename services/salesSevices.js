const salesValidations = require('./utils/validations');

// Requesito 5 (validacao para o Create):
const create = async (productId, quantity) => {
  const validateQuantity = salesValidations.validateQuantity(quantity);
  if (validateQuantity.err) return validateQuantity;
     
  const productCreated = await salesModels.create(productId, quantity);
  
  return productCreated;
};

module.exports = {
    create,
};