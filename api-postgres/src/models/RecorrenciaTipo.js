const Sequelize = require('sequelize');
const baseDados = require('../connection');

const RecorrenciaTipo = baseDados.define('Recorrencia_tipo', {
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
    tableName: 'Recorrencia_tipos',
    timestamps: false,
    freezeTableName: true
});

module.exports = RecorrenciaTipo;