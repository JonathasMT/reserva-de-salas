const Sequelize = require('sequelize');
const dataBase = require('./db');

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
        type: Sequelize.ENUM
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

//Compara se o Modelo de Usuario esta igual o do Banco de Dados
console.log('Grupo: '+(Grupo === dataBase.models.Grupo).toString());
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//remover quando em produção
Grupo.sync({alter: true});

module.exports = Grupo;