// les importations
const db = require('../connect/index');
const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

// creation du modele users
const User = db.define('users', {
    nom: {
        type: Sequelize.STRING
    },
    postnom: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps = false
});

module.exports = user;