const Sequelize = require('sequelize');
const database = require('./dataBase');

const Reserva = database.define('usuario', {
    reservaId: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        primaryKey: true,
        allowNull: false
    },
    usuarioId: {
        type: Sequelize.INTEGER,
        fore
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

module.exports = Reserva;