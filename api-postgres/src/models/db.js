const Sequelize = require('sequelize');
require('dotenv').config();

const dataBase = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USUARIO,
    process.env.POSTGRES_SENHA, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
    }
);

dataBase.authenticate()
.then(() => {
    console.log('Conectado ao banco de dados!');
}).catch((erro) => {
    console.log('Erro ao conectar ao banco de dados \n'+erro);
});

module.exports = dataBase;