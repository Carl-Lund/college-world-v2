const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/';

const db_name = 'CollegeWorld';

const mongo_client = new MongoClient(url);

mongo_client.connect();

const dbc = mongo_client.db(db_name);

module.exports = dbc;
