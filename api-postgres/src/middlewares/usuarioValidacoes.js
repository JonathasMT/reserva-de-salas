const dataBase = require('../models/db');
const Usuario = require('../models/Usuario');

const validarNome = async (req, res, next) => {
    const {nome} = req.body;

    if (!nome) {
        return res.status(400).json({msg: 'O campo Nome deve ser preeenchido!' });
    };
    next();
};

const validarEmail = async (req, res, next) => {
    const {email} = req.body;

    if (!email) {
        return res.status(400).json({msg: 'O campo Email deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o e-mail informado já existe
    const existeEmail = await Usuario.findOne({where : {email: email}});
    if (existeEmail) {
        return res.status(400).json({msg: 'O campo e-mail ' + email + ' já existe!'});
    };
    next();
};

const validarSenha = async (req, res, next) => {
    const {senha, confirmaSenha} = req.body;

    if (!senha) {
        return res.status(400).json({msg: 'O campo Senha deve ser preeenchido!'});
    };
    if (!confirmaSenha) {
        return res.status(400).json({msg: 'O campo Confirmar senha deve ser preeenchido!'});
    };
    if (confirmaSenha != senha ) {
        return res.status(400).json({msg: 'As senhas devem ser iguais!'});
    };
    next();
};

const validarNivel = async (req, res, next) => {
    const {nivel} = req.body;

    if (!nivel) {
        return res.status(400).json({msg: 'O campo Nivel deve ser preeenchido!'});
    };
    next();
};

const validarStatus= async(req, res, next) => {
    const {status} = req.body;

    if (!status) {
        return res.status(400).json({msg: 'O campo Status deve ser preeenchido!'});
    };
    next();
};

module.exports = {
    validarNome,
    validarEmail,
    validarSenha,
    validarNivel,
    validarStatus
};