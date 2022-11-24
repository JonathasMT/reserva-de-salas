const express = require('express');

const router = express.Router();

//validações
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const usuarioControler = require('../controllers/usuarioController');

//ROTA PARA FAZER LOGIN--------------------------------------------------------
//LOGIN
router.post('/login',
    usuarioValidacoes.login,
    usuarioControler.login
);

//NOVO USUÁRIO
router.post('/novousuario',
    usuarioValidacoes.credenciais,
    usuarioValidacoes.novoCadastro,
    //cria o usuario
    usuarioControler.createUsuario
);

module.exports = router;