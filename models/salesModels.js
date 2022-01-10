const mongoConnection = require('./connection');

// Requesito 5 :
const create = async (productId, quantity) => {
    const connection = await mongoConnection();

    const salesCreated = await connection.collection('sales')
    .insertMany({ productId, quantity });
  
    return salesCreated;
  };

module.exports = {
    create,
};