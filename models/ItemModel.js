const Sequelize = require('sequelize');
const db = require('../connect/index');

const Item = db.define('items', {
    label: {
        type: Sequelize.STRING
    },
    qte: {
        type: Sequelize.INTEGER
    }
}, { timestamps: false });

module.exports = Item;