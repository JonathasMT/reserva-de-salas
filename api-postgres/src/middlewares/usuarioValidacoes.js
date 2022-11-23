const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dataBase = require('../db');
const Usuario = require('../models/Usuario');

const validarNome = async (req, res, next) => {
    const {nome} = req.body;

    if (!nome) {
        return res.status(400).json({msg: 'O campo "Nome" deve ser preeenchido!' });
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
    const {senha, confirma_senha} = req.body;

    if (!senha) {
        return res.status(400).json({msg: 'O campo Senha deve ser preeenchido!'});
    };
    if (!confirma_senha) {
        return res.status(400).json({msg: 'O campo Confirmar senha deve ser preeenchido!'});
    };
    if (confirma_senha != senha ) {
        return res.status(400).json({msg: 'As senhas devem ser iguais!'});
    };
    next();
};

const validarNivel = async (req, res, next) => {
    const {nivel} = req.body;

    if (!nivel) {
        return res.status(400).json({msg: 'O campo Nivel deve ser preeenchido!'});
    };
    if (Number.isInteger(nivel)) {
        return res.status(400).json({msg: 'O campo Nível deve ser um número inteiro!'});
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

const validarLogin = async (req, res, next) => {
    const {email, senha} = req.body;

    //verifica se o e-mail foi preenchido
    if (!email) {
        return res.status(400).json({msg: 'O campo "Email" deve ser preeenchido!'});
    };
    //verifica se a senha foi preenchida
    if (!senha) {
        return res.status(400).json({msg: 'O campo "Senha" deve ser preeenchido!'});
    };
    //verifica se o e-mail informado existe
    const usuario = await Usuario.findOne({where : {email: email}});
    if (!usuario) {
        return res.status(400).json({msg: 'E-mail ' + email + ' não foi encontrado!'});
    };
    //verifica se a senha informada está correta
    const verificaSenha = await bcrypt.compare(senha, usuario.senha);
    if(!verificaSenha) {
        return res.status(422).json({msg: 'Senha incorreta!'});
    };
    next();
};

const validarCredenciais = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodificado = jwt.verify(token, process.env.SECRET);
        req.usuario = decodificado;
        console.log(req);
        next();
    } catch (erro) {
        return res.status(401).send({ msg: 'Não autorizado!'});
    };

};

module.exports = {
    validarNome,
    validarEmail,
    validarSenha,
    validarNivel,
    validarStatus,
    validarLogin,
    validarCredenciais
};