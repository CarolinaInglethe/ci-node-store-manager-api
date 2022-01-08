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
    if (name.length < 6) {
      return productsValidations.validateNameLength();
    }

    const existProduct = await findByName(name);
    if (existProduct.err) {
        return existProduct;
    }

    if (quantity <= 0) {
      return productsValidations.validateQuantity();
    }

    if (typeof quantity === 'string') {
      return productsValidations.validateQuantityTypeof();
    }

    const productCreated = await productModels.create(name, quantity);

    return productCreated;
};

module.exports = {
    create,
    findByName,
};