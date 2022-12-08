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

//LISTAR PERFIL
router.get('/listarperfil',
    usuarioValidacoes.credenciais,
    usuarioControler.readPerfil
);

//LISTAR VARIOS USUÁRIOS
router.get('/listarusuarios',
    usuarioValidacoes.credenciais,
    usuarioControler.readVarios
);

//NOVO USUÁRIO
router.post('/novousuario',
    usuarioValidacoes.credenciais,
    usuarioValidacoes.create,
    //cria o usuario
    usuarioControler.create
);

//ATUALIZAR PERFIL
router.put('/atualizarperfil',
    usuarioValidacoes.credenciais,
    usuarioValidacoes.updatePerfil,
    //atuliza o usuario
    usuarioControler.updatePerfil
);

//LER UM USUÁRIO
router.get('/usuario',
    usuarioValidacoes.credenciais,
    usuarioControler.read
);


//DELETAR UM USUARIO
router.delete('/usuario/:id',
    usuarioValidacoes.credenciais,
    usuarioControler.deleteUsuario
);

module.exports = router;