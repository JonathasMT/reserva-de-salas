const express = require('express');
const router = express.Router();

//validações
const salaValidacoes = require('../middlewares/salaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const salaController = require('../controllers/salaController');

//SALA
router.post('/novasala',
    usuarioValidacoes.credenciais,
    salaValidacoes.validarGrupoId,
    salaValidacoes.validarTitulo,
    salaValidacoes.validarCapacidade,
    //cria a sala
    salaController.createSala
);

//LER VARIAS
router.get('/listarsalas',
    usuarioValidacoes.credenciais,
    salaController.readVarias
);

module.exports = router;