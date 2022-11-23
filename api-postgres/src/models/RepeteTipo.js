const Sequelize = require('sequelize');
const dataBase = require('../db');

const RepeteTipo = dataBase.define('Repete_tipo', {
    repete_tipo_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = RepeteTipo;