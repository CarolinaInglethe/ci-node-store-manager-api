const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

// Requesito 5 :
const create = async (arraySales) => {
  const salesCollection = await mongoConnection()
    .then((db) => db.collection('sales'));

  const { insertedId } = await salesCollection
    .insertOne({ itensSold: arraySales });

    return { _id: insertedId, itensSold: [...arraySales] };
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

// Requesito 7 :
const update = async (id, arraySales) => {
  if (!ObjectId.isValid(id)) return false;
  const connection = await mongoConnection();

  await connection.collection('sales').updateOne(
    { _id: ObjectId(id) }, { $set: { itensSold: [...arraySales] } },
  );

  return { _id: id, itensSold: [...arraySales] };
};

module.exports = {
    create,
    getAll,
    getById,
    update,
};