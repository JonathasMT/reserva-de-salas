const Sequelize = require('sequelize');
const dataBase = require('./db');

const Usuario = dataBase.define('Usuario', {
    usuario_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
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
        defaultValue: 1,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    ultimo_login: {
        type: Sequelize.DATE
    },
}, {
    updatedAt: 'criado_em',
    createdAt: 'atualizado_em'
});

//Compara se o Modelo de Usuario esta igual o do Banco de Dados
console.log(Usuario === dataBase.models.Usuario);
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//remover quando em produção
Usuario.sync({alter: true});


module.exports = Usuario;