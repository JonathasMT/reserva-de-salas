const Sequelize = require('sequelize');
const dataBase = require('../db');

const Grupo = require('./Grupo');

const Sala = dataBase.define('Sala', {
    sala_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    grupo_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Grupo,
            key: 'grupo_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: false
    },
    titulo: {
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

module.exports = Sala;