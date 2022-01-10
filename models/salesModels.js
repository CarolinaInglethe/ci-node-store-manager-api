const mongoConnection = require('./connection');

// Requesito 5 :
const create = async (productId, quantity) => {
    const connection = await mongoConnection();

    const createdSales = await connection.collection('sales')
    .insertOne({ productId, quantity });
  
    return createdSales;
  };

module.exports = {
    create,
};