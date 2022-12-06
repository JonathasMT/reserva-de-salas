const Sequelize = require('sequelize');
const baseDados = require('../connection');

const RecorrenciaTipo = baseDados.define('Recorrencia_tipos', {
    recorrencia_tipo_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        allowNull: false
    },
    recorrencia_tipo_nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = RecorrenciaTipo;