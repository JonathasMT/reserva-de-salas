const Sequelize = require('sequelize');
const dataBase = require('../db');

const Grupo = dataBase.define('Grupo', {
    grupo_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    dias_semana: {
        type: Sequelize.JSON
    },
    hora_inicio: {
        type: Sequelize.DATE,
    },
    hora_fim: {
        type: Sequelize.DATE
    },
    tempo_antecedencia: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'Grupos',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

module.exports = Grupo;