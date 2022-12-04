const Sequelize = require('sequelize');
const baseDados = require('../connection');

const Grupo = require('./Grupo');

const Sala = baseDados.define('Sala', {
    sala_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    sala_nome: {
        type: Sequelize.STRING,
        allowNull: false,
         unique: true
    },
    descricao: {
        type: Sequelize.STRING
    },
    capacidade: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'Salas',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

Sala.belongsTo(Grupo, {
    constraint: true,
    foreignKey: 'grupo_id'
});

Grupo.hasMany(Sala, {
    foreignKey: 'grupo_id'
});

module.exports = Sala;