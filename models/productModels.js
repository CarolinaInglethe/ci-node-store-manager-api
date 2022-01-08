const mongoConnection = require('./connection');

// Requesito 1 :
const findByName = async (name) => {
    const connection = await mongoConnection();
    const product = await connection.collection('products').findOne({ name });
    
    return product !== null;
  };

const create = async (name, quantity) => {
    const connection = await mongoConnection();
    const { insertedId: _id } = await connection.collection('products')
      .insertOne({ name, quantity });

    return { _id, name, quantity };
};

module.exports = {
    create,
    findByName,
};