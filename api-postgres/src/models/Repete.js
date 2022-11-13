const Sequelize = require('sequelize');
const dataBase = require('./db');
const RepeteTipo = require('./RepeteTipo');

const Repete = dataBase.define('Repete', {
    repete_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    repete_tipo_id: {
        type: Sequelize.INTEGER,
        references: {
            model: RepeteTipo,
            key: 'repete_tipo_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
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

//Compara se o Modelo de Usuario esta igual o do Banco de Dados
console.log('Repete: '+(Repete === dataBase.models.Repete).toString());
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//remover quando em produção
Repete.sync({alter: true});

module.exports = Repete;