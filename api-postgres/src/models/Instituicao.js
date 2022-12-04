const Sequelize = require('sequelize');
const baseDados = require('../connection');

const Instituicao = baseDados.define('Instituicao', {
    instituicao_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    instituicao_nome: {
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