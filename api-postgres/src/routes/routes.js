const express = require('express');
const router = express.Router();

//importar arquivos de rotas
const primeiroAcessoRoutes = require('./primeiroAcessoRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const instituicaoRoutes = require('./instituicaoRoutes');
const grupoRoutes = require('./grupoRoutes');
const salaRoutes = require('./salaRoutes');
const categoriaRoutes = require('./categoriaRoutes');
const reservaRoutes = require('./reservaRoutes');


//inserir as rotas
router.use(
    primeiroAcessoRoutes,
    usuarioRoutes,
    instituicaoRoutes,
    grupoRoutes,
    salaRoutes,
    categoriaRoutes,
    reservaRoutes,
    
);
module.exports = router;