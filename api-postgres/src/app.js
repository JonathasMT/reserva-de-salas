const express = require('express');
const cors = require('cors');

const baseDados = require('./connection');

//models
const Instituicao = require('./models/Instituicao');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');
const Grupo = require('./models/Grupo');
const Sala = require('./models/Sala');
const RecorrenciaTipo = require('./models/RecorrenciaTipo');
const Recorrencia = require('./models/Recorrencia');
const Reserva = require('./models/Reserva');

//routes
const routes = require('./routes/routes');

//configs
const app =express();
app.use(cors());
app.use(express.json());
app.use(routes);

//altera/remove/adicionas as colunas caso sejam modificadas ou não existam
//>>>>>>>>>>>>>remover quando em produção<<<<<<<<<<<<<
(async () => {
    await Instituicao.sync({alter: true});
    await Usuario.sync({alter: true});
    await Categoria.sync({alter: true});
    await Grupo.sync({alter: true});
    await Sala.sync({alter: true});
    await RecorrenciaTipo.sync({alter: true});
    await Recorrencia.sync({alter: true});
    await Reserva.sync({alter: true});
})();

//Compara se o Modelo esta igual o do Banco de Dados
console.log('Instituicao: '+(Instituicao === baseDados.models.Instituicao));
console.log('Usuario: '+(Usuario === baseDados.models.Usuario));
console.log('Categoria: '+(Categoria === baseDados.models.Categoria));
console.log('Grupo: '+(Grupo === baseDados.models.Grupo));
console.log('Sala: '+(Sala === baseDados.models.Sala));
console.log('RecorrenciaTipo: '+(RecorrenciaTipo === baseDados.models.Recorrencia_tipo));
console.log('Recorrencia: '+(Recorrencia === baseDados.models.Recorrencia));
console.log('Reserva: '+(Reserva === baseDados.models.Reserva));



module.exports = app;