const validateQuantity = (arraySales) => {
  const err = {
    err: {
      code: 'invalid_data',
      message: 'Wrong product ID or invalid quantity',
    },
  };

  // passa por cada sale e valida seu quantity
  for (let i = 0; i < arraySales.length; i + 1) {
 if (arraySales[i].quantity <= 0 || typeof arraySales[i].quantity === 'string') {
      return err;
    } 
}
};

module.exports = {
    validateQuantity,
};