const express = require('express');
const router = express.Router();

//importar arquivos de rotas
const primeiroAcessoRoutes = require('./primeiroAcessoRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const instituicaoRoutes = require('./instituicaoRoutes');
const grupoRoutes = require('./grupoRoutes');
const salaRoutes = require('./salaRoutes');
const categoriaRoutes = require('./categoriaRoutes');
const reservaRoutes = require('./reservaRoutes');


//inserir as rotas
router.use(
    primeiroAcessoRoutes,
    usuarioRoutes,
    instituicaoRoutes,
    grupoRoutes,
    salaRoutes,
    categoriaRoutes,
    reservaRoutes,
    
);

// //validações
// const categoriaValidacoes = require('../middlewares/categoriaValidacoes');
// const recorrenciaValidacoes = require('../middlewares/recorrenciaValidacoes');
// const recorrenciaTipoValidacoes = require('../middlewares/recorrenciaTipoValidacoes');
// const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

// //controllers
// const categoriaController = require('../controllers/categoriaController');
// const recorrenciaController = require('../controllers/recorrenciaController');
// const recorrenciaTipoController = require('../controllers/recorrenciaTipoController');


// //ROTA PARA FAZER LOGIN--------------------------------------------------------
// //ROTAS PARA CADASTRO----------------------------------------------------------
// //ROTAS PARA ATUALIZAR CADASTRO------------------------------------------------
// //ROTAS PARA LER UM UNICO CADASTRO---------------------------------------------
// //ROTAS PARA LER DIVERSOS CADASTROS--------------------------------------------
// //ROTAS PARA DELETAR UM CADASTRO-----------------------------------------------

// //TIPO DE REPETIÇÃO
// router.post('/novotiporepeticao',
//     usuarioValidacoes.credenciais,
//     recorrenciaTipoValidacoes.validarTitulo,
//     //cria o tipo de repetição ex: Diarimente
//     recorrenciaTipoController.createRecorrenciaTipo
// );
// //REPETIÇÃO
// router.post('/novarepeticao',
//     usuarioValidacoes.credenciais,
//     recorrenciaValidacoes.validarRecorrenciaTipoId,
//     recorrenciaValidacoes.validarQuantidade,
//     //cria a repetição de reserva
//     recorrenciaController.createRecorrencia
// );
module.exports = router;