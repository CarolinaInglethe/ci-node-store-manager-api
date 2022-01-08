const connection = require('./connection');

// Requesito 1 :
const findByName = async (name) => {
    const db = await connection();
    const product = await db.collection('products').findOne({ name });
  
    return product !== null;
  };

const create = async (name, quantity) => connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }))
    .then((result) => ({
        id: result.insertedId,
        name,
        quantity,
        }));

module.exports = {
    create,
    findByName,
};