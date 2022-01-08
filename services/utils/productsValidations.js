const validateNameLength = () => ({
    err: {
        code: 'invalid_data',
        message: ' "name" length must be at least 5 characters long ',
    },
});

const validateNameExists = () => ({
    err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
});

const validateQuantity = () => ({
    err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
    },
});

const validateQuantityTypeof = () => ({
    err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
    },
});

module.exports = {
    validateNameLength,
    validateNameExists,
    validateQuantity,
    validateQuantityTypeof,
};