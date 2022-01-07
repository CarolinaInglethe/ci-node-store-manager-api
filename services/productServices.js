const productModels = require('../models/productModels');

// Requesito 1 (validacao para o Create):
const create = async (name, quantity) => {
    if (name.length < 5) {
      return {
        err: {
          code: 'invalid_data',
          message: ' "name" length must be at least 5 characters long ',
        },
      };
    }

    const existProduct = await findByName(name);
    if (existProduct) {
        return {
          err: {
            code: 'invalid_data',
            message: 'Product already exists',
          },
        };
    }

    if (quantity <= 0) {
      return {
          err: {
            code: 'invalid_data',
            message: '"quantity" must be larger than or equal to 1',
          },
      };
    }

    if (typeof quantity === 'string') {
      return {
        err: {
          code: 'invalid_data',
          message: '"quantity" must be a number',
          },
      };
    }

    return productModels.create(name, quantity);
};

module.exports = {
    create,
};