const Sequelize = require('sequelize');
const dataBase = require('./db');

const Repete_tipo = dataBase.define('Repete_tipo', {
    repete_tipo_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

//Compara se o Modelo de Usuario esta igual o do Banco de Dados
console.log('RepeteTipo: '+(Repete_tipo === dataBase.models.Repete_tipo).toString());
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//remover quando em produção
Repete_tipo.sync({alter: true});

module.exports = Repete_tipo;