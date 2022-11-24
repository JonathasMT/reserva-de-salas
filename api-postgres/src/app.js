const express = require('express');
const cors = require('cors');

const dataBase = require('./connection');

//models
const Instituicao = require('./models/Instituicao');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');
const Grupo = require('./models/Grupo');
const Sala = require('./models/Sala');
const RepeteTipo = require('./models/RepeteTipo');
const Repete = require('./models/Repete');
const Reserva = require('./models/Reserva');

//routes
const routes = require('./routes/routes');

//configs
const app =express();
app.use(cors());
app.use(express.json());
app.use(routes);


//Compara se o Modelo esta igual o do Banco de Dados
console.log('Instituicao: '+(Instituicao === dataBase.models.Instituicao).toString());
console.log('Usuario: '+(Usuario === dataBase.models.Usuario).toString());
console.log('Categoria: '+(Categoria === dataBase.models.Categoria).toString());
console.log('Grupo: '+(Grupo === dataBase.models.Grupo).toString());
console.log('Sala: '+(Sala === dataBase.models.Sala).toString());
console.log('RepeteTipo: '+(RepeteTipo === dataBase.models.Repete_tipo).toString());
console.log('Repete: '+(Repete === dataBase.models.Repete).toString());
console.log('Reserva: '+(Reserva === dataBase.models.Reserva).toString());
//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//>>>>>>>>>>>>>remover quando em produção<<<<<<<<<<<<<
(async () => {
    await Instituicao.sync({alter: true});
    await Usuario.sync({alter: true});
    await Categoria.sync({alter: true});
    await Grupo.sync({alter: true});
    await Sala.sync({alter: true});
    await RepeteTipo.sync({alter: true});
    await Repete.sync({alter: true});
    await Reserva.sync({alter: true});
})();


module.exports = app;