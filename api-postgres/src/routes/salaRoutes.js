const express = require('express');

const router = express.Router();

//validações
const categoriaValidacoes = require('../middlewares/categoriaValidacoes');
const grupoValidacoes = require('../middlewares/grupoValidacoes');
const repeteValidacoes = require('../middlewares/repeteValidacoes');
const repeteTipoValidacoes = require('../middlewares/repeteTipoValidacoes');
const reservaValidacoes = require('../middlewares/reservaValidacoes');
const salaValidacoes = require('../middlewares/salaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const categoriaController = require('../controllers/categoriaController');
const grupoController = require('../controllers/grupoController');
const repeteController = require('../controllers/repeteController');
const repeteTipoController = require('../controllers/repeteTipoController');
const reservaController = require('../controllers/reservaController');
const salaController = require('../controllers/salaController');
const usuarioControler = require('../controllers/usuarioController');
const instituicaoController = require('../controllers/instituicaoController');

//SALA
router.post('/novasala',
    usuarioValidacoes.validarCredenciais,
    salaValidacoes.validarGrupoId,
    salaValidacoes.validarTitulo,
    salaValidacoes.validarCapacidade,
    //cria a sala
    salaController.createSala
);

module.exports = router;