const productModels = require('../models/productModels');
const errorProducts = require('./utils/productsErrors');

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
      return errorProducts.errorNameLength();
    }

    const existProduct = await productModels.findByName(name);
    if (existProduct) {
        return errorProducts.errorNameExist();
    }

    if (quantity <= 0) {
      return errorProducts.errorQuantityLength();
    }

    if (typeof quantity === 'string') {
      return errorProducts.errorQuantityTypeof();
    }

    const productCreated = await productModels.create(name, quantity);

    return productCreated;
};

module.exports = {
    create,
    findByName,
};