const { MongoClient } = require('mongodb');
const { promise } = require('sinon');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
const DB_NAME = 'StoreManager';

let db = null;

const connection = () => (
    db
    ? promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => { 
      db = conn.db(DB_NAME);
      return db; 
    })
    .catch((err) => console.log(err.message))
  );

module.exports = connection;