const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

// Requesito 5 :
const create = async (productId, quantity) => {
    const connection = await mongoConnection();

    const createdSales = await connection.collection('sales')
    .insertOne({ productId, quantity });
  
    return createdSales;
  };

// Requesito 6:
const getAll = async () => {
  const connection = await mongoConnection();
  const allSales = await connection.collection('sales').find().toArray();

  return allSales;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  const connection = await mongoConnection();
  const productById = await connection.collection('sales')
    .findOne({ _id: ObjectId(id) });

  return productById;
};

module.exports = {
    create,
    getAll,
    getById,
};