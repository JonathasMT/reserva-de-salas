const Sequelize = require('sequelize');
const baseDados = require('../connection');

const Grupo = baseDados.define('Grupo', {
    grupo_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    grupo_nome: {
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
        type: Sequelize.STRING(5)
    },
    hora_fim: {
        type: Sequelize.STRING(5)
    },
    antecedencia_minima: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'Grupos',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

module.exports = Grupo;