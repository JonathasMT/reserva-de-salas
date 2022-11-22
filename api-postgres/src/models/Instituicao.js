const Sequelize = require('sequelize');
const dataBase = require('./db');

const Instituicao = dataBase.define('Instituicao', {
    instituicao_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'Instituicao',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em',
    freezeTableName: true
});

module.exports = Instituicao;