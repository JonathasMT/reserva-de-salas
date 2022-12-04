const {Sequelize} = require('sequelize');
require('dotenv').config();

const baseDados = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USUARIO,
    process.env.POSTGRES_SENHA, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    logging: false
    }
);

//metodo assincrono - autenticar banco de dados
baseDados.authenticate()
.then(() => {
    console.log('Conectado ao banco de dados!');
}).catch((erro) => {
    console.error('Erro ao conectar ao banco de dados \n'+erro);
});

module.exports = baseDados;