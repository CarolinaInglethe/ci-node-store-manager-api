const productsModels = require('../../models/productModels');

const validateQuantity = (arraySales) => {
  if (typeof arraySales[0].quantity !== 'number' || arraySales[0].quantity <= 0) {
    return {
      err: {
        code: 'invalid_data',
         message: 'Wrong product ID or invalid quantity',
      },
    };
  }
  return true;
};

const validationProductId = async (arraySales) => {
  const productIdExists = await productsModels.getById(arraySales[0].productId);
  const validateHex = /[0-9A-Fa-f]{6}/g;
  if (!validateHex.test(arraySales[0].productId) || !productIdExists) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      },
    };
  }
  return true;
};

module.exports = {
    validateQuantity,
    validationProductId,
};