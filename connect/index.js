// creation de la base de donnee
const Sequelize = require('sequelize');
const config = require('config');

const db = new Sequelize(config.get('database'), config.get('username'), config.get('password'), {

    host: 'localhost',
    port: 33060,
    dialect: 'mysql'

});

// importation de db
module.exports = db;