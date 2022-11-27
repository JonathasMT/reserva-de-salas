const express = require('express');
const router = express.Router();

//validações
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');
const instituicaoValidacoes = require('../middlewares/instituicaoValidacoes');

//controllers
const instituicaoController = require('../controllers/instituicaoController');

//LER
router.get('/listarinstituicao',
    usuarioValidacoes.credenciais,
    instituicaoController.read
);

//ATUALIZAR
router.put('/atualizarinstituicao',
    usuarioValidacoes.credenciais,
    instituicaoValidacoes.update,
    instituicaoController.update
);

module.exports = router;