const connection = require('./connection');

// Requesito 1 :
const create = async (name, quantity) => connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }))
    .then((result) => ({
        id: result.insertedId,
        name,
        quantity,
        }));

module.exports = {
    create,
};