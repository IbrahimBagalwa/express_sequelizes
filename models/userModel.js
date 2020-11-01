// les importations
const db = require('../connect/index');
const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

// creation du modele users
const User = db.define('users', {
    nom: {
        type: Sequelize.STRING
    },
    postNom: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    // si une fois la table auto add d'autres champs on utilise le timestamps false parce que par default il a toujours ete true
    timestamps: false
});

module.exports = User;