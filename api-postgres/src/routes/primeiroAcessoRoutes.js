const express = require('express');
const router = express.Router();

//validações
const primeiroAcessoValidacoes = require('../middlewares/primeiroAcessoValidacoes');

//controllers
const primeiroAcessoController = require('../controllers/primeiroAcessoController');

//TAMANHO DA TABELA USUARIOS
router.get('/primeiroacesso', 
    primeiroAcessoController.tamanhoBd
);

//CADASTRA INSTITUIÇÃO E USUARIO NO PRIMEIRO ACESSO
router.post('/primeiroacesso',
    primeiroAcessoValidacoes.tamanhoBd,
    primeiroAcessoValidacoes.cadastro,
    //cria a intituiçaõ e o usuario no primeiro acesso
    primeiroAcessoController.cadastro
);

module.exports = router;