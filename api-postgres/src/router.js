const express = require('express');

const router = express.Router();

const usuarioControler = require('./controllers/usuarioController');
const usuarioValidacoes = require('./middlewares/usuarioValidacoes');

// //rota raiz/home
// router.get('/', async (req, res) => {
//     return res.status(200).json({
//         msg: "Joanatas R. Martins - API de reserva de salas."
//     });
// });

//rota cadastrar usuario
router.post('/cadastro', 
    usuarioValidacoes.validarNome,
    usuarioValidacoes.validarEmail,
    usuarioValidacoes.validarSenha,
    usuarioValidacoes.validarNivel,
    usuarioControler.createUsuario);
//rota obter usuario
router.get('/usuario/:id', usuarioControler.readUsuario);
//rota obter todos os usuarios
router.get('/usuarios', usuarioControler.readUsuarios);
//rota atualizar usuario
router.put('/usuario/:id', usuarioControler.updateUsuario);
//rota deletar usuario
router.delete('/usuario/:id', usuarioControler.deleteUsuario);


module.exports = router;