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
    usuarioControler.create
);

//ATUALIZAR USUÁRIO
router.put('/usuario/:id',
    usuarioValidacoes.credenciais,
    //atuliza o usuario
    usuarioControler.update
);

//LER UM USUÁRIO
router.get('/usuario/:id',
    usuarioValidacoes.credenciais,
    usuarioControler.read
);

//LER VARIOS USUÁRIOS
router.get('/usuarios',
    usuarioValidacoes.credenciais,
    usuarioControler.readVarios
);

//DELETAR UM USUARIO
router.delete('/usuario/:id',
    usuarioValidacoes.credenciais,
    usuarioControler.deleteUsuario
);

module.exports = router;