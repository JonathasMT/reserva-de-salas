const bcrypt = require('bcrypt');

const dataBase = require('../models/db');
const Usuario = require('../models/Usuario');

var usuario;

const validarEmail = async (req, res, next) => {
    const {email} = req.body;

    if (!email) {
        return res.status(400).json({msg: 'O campo Email deve ser preeenchido!'});
    };
    await dataBase.sync();
    //verifica se o e-mail informado existe
    const existeEmail = await Usuario.findOne({where : {email: email}});
    if (!existeEmail) {
        return res.status(400).json({msg: 'O e-mail ' + email + ' não foi encontrado!'});
    };
    usuario = existeEmail;
    next();
};

const validarSenha = async (req, res, next) => {
    const {senha} = req.body;

    if (!senha) {
        return res.status(400).json({msg: 'O campo Senha deve ser preeenchido!'});
    };

    const verificaSenha = await bcrypt.compare(senha, usuario.senha);
    if(!verificaSenha) {
        return res.status(422).json({msg: 'Senha incorreta!'});
    };
    next();
};

module.exports = {
    validarEmail,
    validarSenha
};