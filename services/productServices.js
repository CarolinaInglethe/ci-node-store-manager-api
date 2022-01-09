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

// Requesito 2 (validacao dos retornos get) :
const getAll = async () => {
  const allProducts = await productModels.getAll();

  return allProducts;
};

const getById = async (id) => {
  const productById = await productModels.getById(id);

  if (!productById) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    };
  }

  return productById;
};

module.exports = {
    create,
    findByName,
    getAll,
    getById,
};