const mongoConnection = require('./connection');

// Requesito 1 :
const findByName = async (name) => {
    const connection = await mongoConnection.connection();
    const product = await connection.collection('products').findOne({ name });
  
    return product !== null;
  };

const create = async (name, quantity) => {
    const productCreated = await mongoConnection.connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }))
    .then((result) => ({
        _id: result.insertedId,
        name,
        quantity,
        }));
    return productCreated;
};

module.exports = {
    create,
    findByName,
};