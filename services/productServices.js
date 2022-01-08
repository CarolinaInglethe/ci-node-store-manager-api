const productModels = require('../models/productModels');
const productsValidations = require('./utils/productsValidations');

// Requesito 1 (validacao para o Create):
const findByName = async (name) => {
  const exist = await productModels.findByName(name);

  if (exist) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    };
  }
  return false;
};

const create = async (name, quantity) => {
    const validateName = productsValidations.validateNameLength(name);
    if (validateName.err) return validateName;

    const validateQuantity = productsValidations.validateQuantity(quantity);
    if (validateQuantity.err) return validateQuantity;

    const existProduct = await findByName(name);
    if (existProduct.err) return existProduct;

    const productCreated = await productModels.create(name, quantity);

    return productCreated;
};

module.exports = {
    create,
    findByName,
};