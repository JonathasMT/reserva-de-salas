const express = require('express');

const router = express.Router();

//validações
const instituicaoValidacoes = require('../middlewares/instituicaoValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const usuarioControler = require('../controllers/usuarioController');
const instituicaoController = require('../controllers/instituicaoController');

//TAMANHO DA TABELA USUARIOS
router.get('/primeiroacesso', 
    usuarioControler.tamanhoBancoDeDados
);

//CADASTRA INSTITUIÇÃO E USUARIO NO PRIMEIRO ACESSO
router.post('/primeiroacesso',
    instituicaoValidacoes.validarTamanhoBancoDeDados,
    instituicaoValidacoes.validarNomeInstituicao,
    usuarioValidacoes.validarNome,
    usuarioValidacoes.validarEmail,
    usuarioValidacoes.validarSenha,
    //cria a instituiçao
    instituicaoController.createInstituicao,
    //cria o usuario
    usuarioControler.createUsuario
);

module.exports = router;