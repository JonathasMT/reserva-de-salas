const Sequelize = require('sequelize');
const dataBase = require('../db');
const Usuario = require('./Usuario');

const Reserva = dataBase.define('Reserva', {
    reserva_id: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        primaryKey: true,
        allowNull: false
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Usuario,
            key: 'usuario_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING
    },
    nivel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
});

//Compara se o Modelo de Usuario esta igual o do Banco de Dados
console.log(Reserva === dataBase.models.Reserva);
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//remover quando em produção
Reserva.sync({alter: true});

module.exports = Reserva;