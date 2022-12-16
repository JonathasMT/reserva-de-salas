const Sequelize = require('sequelize');
const baseDados = require('../connection');
const RecorrenciaTipo = require('./RecorrenciaTipo');

const Recorrencia = baseDados.define('Recorrencia', {
    recorrencia_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
tableName: 'Recorrencias',
timestamps: false,
freezeTableName: true
});

Recorrencia.belongsTo(RecorrenciaTipo, {
    constraint: true,
    foreignKey: {
        name: 'recorrencia_tipo_id',
        allowNull: false
    }
});

RecorrenciaTipo.hasMany(Recorrencia, {
    foreignKey: 'recorrencia_tipo_id'
});

module.exports = Recorrencia;