const express = require('express');

const router = express.Router();

//importar arquivos de rotas
const primeiroAcessoRoutes = require('./primeiroAcessoRoutes');
const usuarioRoutes = require('./usuarioRoutes');


//inserir as rotas
router.use(
    primeiroAcessoRoutes,
    usuarioRoutes
);


//validações
const categoriaValidacoes = require('../middlewares/categoriaValidacoes');
const grupoValidacoes = require('../middlewares/grupoValidacoes');
const repeteValidacoes = require('../middlewares/repeteValidacoes');
const repeteTipoValidacoes = require('../middlewares/repeteTipoValidacoes');
const reservaValidacoes = require('../middlewares/reservaValidacoes');
const usuarioValidacoes = require('../middlewares/usuarioValidacoes');

//controllers
const categoriaController = require('../controllers/categoriaController');
const grupoController = require('../controllers/grupoController');
const repeteController = require('../controllers/repeteController');
const repeteTipoController = require('../controllers/repeteTipoController');
const reservaController = require('../controllers/reservaController');
const usuarioControler = require('../controllers/usuarioController');
const instituicaoController = require('../controllers/instituicaoController');


//ROTA PARA FAZER LOGIN--------------------------------------------------------
//ROTAS PARA CADASTRO----------------------------------------------------------
//ROTAS PARA ATUALIZAR CADASTRO------------------------------------------------
//ROTAS PARA LER UM UNICO CADASTRO---------------------------------------------
//ROTAS PARA LER DIVERSOS CADASTROS--------------------------------------------
//ROTAS PARA DELETAR UM CADASTRO-----------------------------------------------

//INSTITUIÇAO
router.post('/intituicao',
    usuarioValidacoes.validarCredenciais,
    instituicaoController.createInstituicao
);
//USUARIO
router.post('/novousuario',
    usuarioValidacoes.validarCredenciais,
    usuarioValidacoes.validarNome,
    usuarioValidacoes.validarEmail,
    usuarioValidacoes.validarSenha,
    usuarioValidacoes.validarNivel,
    //cria o usuario
    usuarioControler.createUsuario
);
//GRUPO
router.post('/novogrupo',
    usuarioValidacoes.validarCredenciais,
    grupoValidacoes.validarTitulo,
    grupoValidacoes.validarDiasSemana,
    grupoValidacoes.validarHoraInicio,
    grupoValidacoes.validarHoraFim,
    grupoValidacoes.validarTempoAntecedencia,
    //cria o grupo de salas
    grupoController.createGrupo
);

//CATEGORIA
router.post('/novacategoria',
    usuarioValidacoes.validarCredenciais,
    categoriaValidacoes.validarTitulo,
    categoriaValidacoes.validarCor,
    //cria a categoria de reserva
    categoriaController.createCategoria
);
//TIPO DE REPETIÇÃO
router.post('/novotiporepeticao',
    usuarioValidacoes.validarCredenciais,
    repeteTipoValidacoes.validarTitulo,
    //cria o tipo de repetição ex: Diarimente
    repeteTipoController.createRepeteTipo
);
//REPETIÇÃO
router.post('/novarepeticao',
    usuarioValidacoes.validarCredenciais,
    repeteValidacoes.validarRepeteTipoId,
    repeteValidacoes.validarQuantidade,
    //cria a repetição de reserva
    repeteController.createRepete
);
//RESERVA
router.post('/novareserva',
    usuarioValidacoes.validarCredenciais,
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




//USUARIO
router.put('/usuario/:id',
    usuarioValidacoes.validarCredenciais,
    usuarioValidacoes.validarNome,
    usuarioValidacoes.validarEmail,
    usuarioValidacoes.validarSenha,
    usuarioValidacoes.validarNivel,
    //atuliza o usuario
    usuarioControler.updateUsuario
);




//USUARIO
router.get('/usuario/:id',
    usuarioValidacoes.validarCredenciais,
    usuarioControler.readUsuario
);



//USUARIO
router.get('/usuarios',
    usuarioValidacoes.validarCredenciais,
    usuarioControler.readVariosUsuarios
);



//USUARIO
router.delete('/usuario/:id',
    usuarioValidacoes.validarCredenciais,
    usuarioControler.deleteUsuario
);

module.exports = router;