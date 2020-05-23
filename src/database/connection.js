const knex = require('knex');
const configuration = require('../../knexfile');

//Creating the database connection.
const connection = knex(configuration.development);

module.exports = connection;