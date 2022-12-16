const express = require('express');
const router = express.Router();

//validações
const salaValidacoes = require('../middlewares/salaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const salaController = require('../controllers/salaController');

//NOVO
router.post('/novasala',
    usuarioValidacoes.credenciais,
    salaValidacoes.create,
    //cria a sala
    salaController.create
);

//LER VARIAS
router.get('/listarsalas',
    usuarioValidacoes.credenciais,
    salaController.readVarias
);

module.exports = router;