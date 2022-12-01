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

//validações
const categoriaValidacoes = require('../middlewares/categoriaValidacoes');
const repeteValidacoes = require('../middlewares/repeteValidacoes');
const repeteTipoValidacoes = require('../middlewares/repeteTipoValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const categoriaController = require('../controllers/categoriaController');
const repeteController = require('../controllers/repeteController');
const repeteTipoController = require('../controllers/repeteTipoController');


//ROTA PARA FAZER LOGIN--------------------------------------------------------
//ROTAS PARA CADASTRO----------------------------------------------------------
//ROTAS PARA ATUALIZAR CADASTRO------------------------------------------------
//ROTAS PARA LER UM UNICO CADASTRO---------------------------------------------
//ROTAS PARA LER DIVERSOS CADASTROS--------------------------------------------
//ROTAS PARA DELETAR UM CADASTRO-----------------------------------------------

//TIPO DE REPETIÇÃO
router.post('/novotiporepeticao',
    usuarioValidacoes.credenciais,
    repeteTipoValidacoes.validarTitulo,
    //cria o tipo de repetição ex: Diarimente
    repeteTipoController.createRepeteTipo
);
//REPETIÇÃO
router.post('/novarepeticao',
    usuarioValidacoes.credenciais,
    repeteValidacoes.validarRepeteTipoId,
    repeteValidacoes.validarQuantidade,
    //cria a repetição de reserva
    repeteController.createRepete
);
module.exports = router;