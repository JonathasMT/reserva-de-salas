const express = require('express');
const router = express.Router();

//validações
const categoriaValidacoes = require('../middlewares/categoriaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const categoriaController = require('../controllers/categoriaController');

//NOVA CATEGORIA
router.post('/novacategoria',
    usuarioValidacoes.credenciais,
    categoriaValidacoes.create,
    //cria a sala
    categoriaController.create
);

//LER VARIAS
router.get('/listarcategorias',
    usuarioValidacoes.credenciais,
    categoriaController.readVarias,
);

module.exports = router;