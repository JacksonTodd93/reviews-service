// getting-started.js
const { Client } = require('pg');
const faker = require('faker');
const client = new Client({
  user: 'jackson',
  host: 'localhost',
  database: 'reviews',
  port: 5432,
});

//connect mongoose to postgres
client.connect();

//define reviewSchema values

//create model for schema inputs

module.exports = client;