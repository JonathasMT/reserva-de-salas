const {Sequelize} = require('sequelize');
require('dotenv').config();

// const Instituicao = require('./Instituicao');
// const Usuario = require('./Usuario');
// const Categoria = require('./Categoria');
// const Grupo = require('./Grupo');
// const Sala = require('./Sala');
// const RepeteTipo = require('./RepeteTipo');
// const Repete = require('./Repete');
// const Reserva = require('./Reserva');


const dataBase = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USUARIO,
    process.env.POSTGRES_SENHA, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    logging: false
    }
);


//metodo assincrono - autenticar banco de dados
dataBase.authenticate()
.then(() => {
    console.log('Conectado ao banco de dados!');
}).catch((erro) => {
    console.error('Erro ao conectar ao banco de dados \n'+erro);
});


// (async () => {
//     await dataBase.sync();
//   })();

// const Instituicao = require('./Instituicao');
// const Usuario = require('./Usuario');
// const Categoria = require('./Categoria');
// const Grupo = require('./Grupo');
// const Sala = require('./Sala');
// const RepeteTipo = require('./RepeteTipo');
// const Repete = require('./Repete');
// const Reserva = require('./Reserva');

// //Compara se o Modelo esta igual o do Banco de Dados
// console.log('Instituicao: '+(Instituicao === dataBase.models.Instituicao).toString());
// console.log('Usuario: '+(Usuario === dataBase.models.Usuario).toString());
// console.log('Categoria: '+(Categoria === dataBase.models.Categoria).toString());
// console.log('Grupo: '+(Grupo === dataBase.models.Grupo).toString());
// console.log('Sala: '+(Sala === dataBase.models.Sala).toString());
// console.log('RepeteTipo: '+(RepeteTipo === dataBase.models.RepeteTipo).toString());
// console.log('Repete: '+(Repete === dataBase.models.Repete).toString());
// console.log('Reserva: '+(Reserva === dataBase.models.Reserva).toString());
// //altera/remove/adicionas as colunas caso sejam modificadas ou não existam
// //>>>>>>>>>>>>>remover quando em produção<<<<<<<<<<<<<
// Instituicao.sync({alter: true});
// Usuario.sync({alter: true});
// Categoria.sync({alter: true});
// Grupo.sync({alter: true});
// Sala.sync({alter: true});
// RepeteTipo.sync({alter: true});
// Repete.sync({alter: true});
// Reserva.sync({alter: true});

module.exports = dataBase;