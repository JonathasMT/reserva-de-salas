const express = require('express');
const router = express.Router();

//validações
const reservaValidacoes = require('../middlewares/reservaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const reservaController = require('../controllers/reservaController');

//CADASTRO
router.post('/novareserva',
    usuarioValidacoes.credenciais,
    reservaValidacoes.create,
    reservaController.create
);
//LER VARIAS
router.get('/listarreservas',
    usuarioValidacoes.credenciais,
    reservaController.readVarias
);

//ATUALIZAR
router.put('/atualizarreserva',
    usuarioValidacoes.credenciais,
    reservaValidacoes.update,
    reservaController.update
);
module.exports = router;