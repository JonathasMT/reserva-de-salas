const express = require('express');
const router = express.Router();

//validações
const salaValidacoes = require('../middlewares/salaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const salaController = require('../controllers/salaController');

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