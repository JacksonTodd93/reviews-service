// getting-started.js
const { Client } = require('pg');
const faker = require('faker');
const client = new Client({
  user: 'jackson',
  host: 'localhost',
  database: 'reviews',
  port: 5432,
});

//connect to database
client.connect();

module.exports = client;