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

//Compara se o Modelo de Usuario esta igual o do Banco de Dados
console.log('Categoria: '+(Categoria === dataBase.models.Categoria).toString());
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//remover quando em produção
Categoria.sync({alter: true});

module.exports = Categoria;