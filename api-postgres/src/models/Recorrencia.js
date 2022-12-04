const Sequelize = require('sequelize');
const baseDados = require('../connection');
const RecorrenciaTipo = require('./RecorrenciaTipo');

const Recorrencia = baseDados.define('Recorrencias', {
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
    freezeTableName: true,
    timestamps: false
});

Recorrencia.belongsTo(RecorrenciaTipo, {
    constraint: true,
    foreignKey: 'recorrencia_tipo_id'
});

RecorrenciaTipo.hasMany(Recorrencia, {
    foreignKey: 'recorrencia_tipo_id'
});

module.exports = Recorrencia;