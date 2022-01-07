const productModels = require('../models/productModels');
const errorProducts = require('./utils/productsErrors');

// Requesito 1 (validacao para o Create):
const create = async (name, quantity) => {
    if (name.length < 5) {
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

    return productModels.create(name, quantity);
};

module.exports = {
    create,
};