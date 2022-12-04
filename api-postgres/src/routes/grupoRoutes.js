const express = require('express');
const router = express.Router();

//validações
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');
const grupoValidacoes = require('../middlewares/grupoValidacoes');

//controllers
const grupoController = require('../controllers/grupoController');

//NOVO
router.post('/novogrupo',
    usuarioValidacoes.credenciais,
    grupoValidacoes.create,
    //cria o grupo de salas
    grupoController.create
);

//LISTAR UM
router.get('/listargrupo',
    usuarioValidacoes.credenciais,
    grupoController.read
);

//LISTAR VARIOS
router.get('/listargrupos',
    usuarioValidacoes.credenciais,
    grupoController.readVarios
);

//ATUALIZAR
router.put('/atualizargrupo',
    usuarioValidacoes.credenciais,
    grupoValidacoes.update,
    grupoController.update
);



module.exports = router;