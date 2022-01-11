const productsServices = require('../productServices');

const validateQuantity = (arraySales) => {
  // passa por cada sale e valida seu quantity
  for (let i = 0; i < arraySales.length; i + 1) {
    if (arraySales[i].quantity <= 0 || typeof arraySales[i].quantity === 'string') {
      return {
        err: {
          code: 'invalid_data',
          message: 'Wrong product ID or invalid quantity',
        },
      };
    } 
  }
};

const validateProductId = async (arraySales) => {
  for (let i = 0; i < arraySales.length; i + 1) {
    const validateProduct = productsServices
      .getById(arraySales[i].productId);
    
    if (validateProduct.err) {
      return {
        err: {
          code: 'invalid_data',
          message: 'Wrong product ID or invalid quantity',
        },
      };
    }
  }
};

module.exports = {
    validateQuantity,
    validateProductId,
};