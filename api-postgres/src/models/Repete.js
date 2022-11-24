const Sequelize = require('sequelize');
const dataBase = require('../connection');
const RepeteTipo = require('./RepeteTipo');

const Repete = dataBase.define('Repete', {
    repete_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    repete_tipo_id: {
        type: Sequelize.INTEGER,
        references: {
            model: RepeteTipo,
            key: 'repete_tipo_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Repete;