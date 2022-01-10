const { ObjectId } = require('mongodb');
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

// Requesito 2 :
const getAll = async () => {
  const connection = await mongoConnection();
  const allProducts = await connection.collection('products').find().toArray();

  return allProducts;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  const connection = await mongoConnection();
  const productById = await connection.collection('products')
    .findOne({ _id: ObjectId(id) });

  return productById;
};

// Requesito 3 :
const update = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return false;
  const connection = await mongoConnection();

  await connection.collection('products').updateOne(
    { _id: ObjectId(id) }, { $set: { name, quantity } },
  );

  return { id, name, quantity };
};

// Requesito 4 :
const deleteProduct = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  const connection = await mongoConnection();

  // https://pt.stackoverflow.com/questions/157669/como-deletar-um-documento-espec%C3%ADfico-de-uma-collection-no-mongodb
  const productDeleted = await connection.collection('products')
  .remove({ _id: ObjectId(id) });

  return productDeleted;
};

module.exports = {
    create,
    findByName,
    getAll,
    getById,
    update,
    deleteProduct,
};