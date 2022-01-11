const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

// Requesito 5 :
const create = async (arraySales) => {
    const connection = await mongoConnection();

    const { insertedId: id } = await connection.collection('sales')
    .insertOne({ itensSold: arraySales });
  
    return { _id: id, itensSold: arraySales };
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