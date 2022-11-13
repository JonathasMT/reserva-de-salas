const express = require('express');

const router = express.Router();

//validações
const categoriaValidacoes = require('./middlewares/categoriaValidacoes');
const grupoValidacoes = require('./middlewares/grupoValidacoes');
const repeteValidacoes = require('./middlewares/repeteValidacoes');
const repeteTipoValidacoes = require('./middlewares/repeteTipoValidacoes');
const reservaValidacoes = require('./middlewares/reservaValidacoes');
const salaValidacoes = require('./middlewares/salaValidacoes');
const usuarioValidacoes = require('./middlewares/usuarioValidacoes');

const loginValidacoes = require('./middlewares/loginValidacoes');

//controllers
const categoriaController = require('./controllers/categoriaController');
const grupoController = require('./controllers/grupoController');
const repeteController = require('./controllers/repeteController');
const repeteTipoController = require('./controllers/repeteTipoController');
const reservaController = require('./controllers/reservaController');
const salaController = require('./controllers/salaController');
const usuarioControler = require('./controllers/usuarioController');

// //rota raiz/home
// router.get('/', async (req, res) => {
//     return res.status(200).json({
//         msg: "Joanatas R. Martins - API de reserva de salas."
//     });
// });

//ROTAS PARA CADASTRO----------------------------------------------------------

//USUARIO
router.post('/novousuario', 
    usuarioValidacoes.validarNome,
    usuarioValidacoes.validarEmail,
    usuarioValidacoes.validarSenha,
    usuarioValidacoes.validarNivel,
    //cria o usuario
    usuarioControler.createUsuario
);
//GRUPO
router.post('/novogrupo',
    grupoValidacoes.validarTitulo,
    grupoValidacoes.validarDiasSemana,
    grupoValidacoes.validarHoraInicio,
    grupoValidacoes.validarHoraFim,
    grupoValidacoes.validarTempoAntecedencia,
    //cria o grupo de salas
    grupoController.createGrupo
);
//SALA
router.post('/novasala',
    salaValidacoes.validarGrupoId,
    salaValidacoes.validarTitulo,
    salaValidacoes.validarCapacidade,
    //cria a sala
    salaController.createSala
);
//CATEGORIA
router.post('/novacategoria',
    categoriaValidacoes.validarTitulo,
    categoriaValidacoes.validarCor,
    //cria a categoria de reserva
    categoriaController.createCategoria
);
//TIPO DE REPETIÇÃO
router.post('/novotiporepeticao',
    repeteTipoValidacoes.validarTitulo,
    //cria o tipo de repetição ex: Diarimente
    repeteTipoController.createRepeteTipo
);
//REPETIÇÃO
router.post('/novarepeticao',
    repeteValidacoes.validarRepeteTipoId,
    repeteValidacoes.validarQuantidade,
    //cria a repetição de reserva
    repeteController.createRepete
);
//RESERVA
router.post('/novareserva',
    reservaValidacoes.validarUsuarioId,
    reservaValidacoes.validarSalaId,
    reservaValidacoes.validarCategoriaId,
    reservaValidacoes.validarRepeteId,
    reservaValidacoes.validarTitulo,
    reservaValidacoes.validarData,
    reservaValidacoes.validarHoraInicio,
    reservaValidacoes.validarHoraFim,
    //cria a nova reserva
    reservaController.createReserva
);


//ROTAS PARA ATUALIZAR CADASTRO------------------------------------------------

//USUARIO
router.put('/usuario/:id',
    usuarioValidacoes.validarNome,
    usuarioValidacoes.validarEmail,
    usuarioValidacoes.validarSenha,
    usuarioValidacoes.validarNivel,
    //atuliza o usuario
    usuarioControler.updateUsuario
);


//ROTAS PARA LER UM UNICO CADASTRO---------------------------------------------

//USUARIO
router.get('/usuario/:id', usuarioControler.readUsuario);


//ROTAS PARA LER DIVERSOS CADASTROS--------------------------------------------

//USUARIO
router.get('/usuarios', usuarioControler.readVariosUsuarios);


//ROTAS PARA DELETAR UM CADASTRO-----------------------------------------------

//USUARIO
router.delete('/usuario/:id', usuarioControler.deleteUsuario);


//ROTAS PARA DELETAR VARIOS CADASTROS------------------------------------------


//ROTA PARA FAZER LOGIN--------------------------------------------------------
router.post('/login',
    loginValidacoes.validarEmail,
    loginValidacoes.validarSenha,
    usuarioControler.login
);


module.exports = router;