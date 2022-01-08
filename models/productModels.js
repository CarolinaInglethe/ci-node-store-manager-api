const mongoConnection = require('./connection');

// Requesito 1 :
const create = async (name, quantity) => {
  const productsCollection = await mongoConnection()
    .then((db) => db.collection('products'));

  const { insertedId: _id } = await productsCollection.insertOne({ name, quantity });

  return { _id, name, quantity };
};

const findByName = async (name) => {
    const connection = await mongoConnection();
    const product = await connection.collection('products').findOne({ name });
    
    return product !== null;
  };

module.exports = {
    create,
    findByName,
};