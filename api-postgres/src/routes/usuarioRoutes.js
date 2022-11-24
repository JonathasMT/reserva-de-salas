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

//ATUALIZAR USUÁRIO
router.put('/usuario/:id',
    usuarioValidacoes.credenciais,
    //atuliza o usuario
    usuarioControler.updateUsuario
);

//LER UM USUÁRIO
router.get('/usuario/:id',
    usuarioValidacoes.credenciais,
    usuarioControler.readUsuario
);

//LER VARIOS USUÁRIOS
router.get('/usuarios',
    usuarioValidacoes.credenciais,
    usuarioControler.readVariosUsuarios
);

//DELETAR UM USUARIO
router.delete('/usuario/:id',
    usuarioValidacoes.credenciais,
    usuarioControler.deleteUsuario
);

module.exports = router;