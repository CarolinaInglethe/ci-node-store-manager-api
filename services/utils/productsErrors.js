const errorNameLength = () => ({
    err: {
        code: 'invalid_data',
        message: ' "name" length must be at least 5 characters long ',
    },
});

const errorNameExist = () => ({
    err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
});

const errorQuantityLength = () => ({
    err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
    },
});

const errorQuantityTypeof = () => ({
    err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
    },
});

module.exports = {
    errorNameLength,
    errorNameExist,
    errorQuantityLength,
    errorQuantityTypeof,
};