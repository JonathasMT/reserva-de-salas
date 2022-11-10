const Sequelize = require('sequelize');
const database = require('./dataBase');

const Usuario = database.define('usuario', {
    usuarioId: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
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
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
});

module.exports = Usuario;