const Sequelize = require('sequelize');
const dataBase = require('./db');

const Categoria = dataBase.define('Categoria', {
    categoria_id: {
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
        type: Sequelize.STRING,
    },
    cor: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'Categorias',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

module.exports = Categoria;