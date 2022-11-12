const Usuario = require('../models/Usuario');

const validarNome = async (req, res, next) => {
    const { nome } = req.body;

    if (nome === undefined) {
        return res.status(400).json({ msg: 'O campo Nome é obritatório!' });
    };
    if (nome === '') {
        return res.status(400).json({ msg: 'O campo Nome deve ser preeenchido!' });
    };
    next();
};

const validarEmail = async (req, res, next) => {
    const { email } = req.body;

    if (email === undefined) {
        return res.status(400).json({ msg: 'O campo Email é obritatório!' });
    };
    if (email === '') {
        return res.status(400).json({ msg: 'O campo Email deve ser preeenchido!' });
    };
    const existeEmail = await Usuario.findOne({where : {email: email}});
    if (existeEmail) {
        return res.status(400).json({ msg: 'O campo e-mail ' + email + ' já existe, use outro e-mail!' });
    };
    next();
};

const validarSenha = async (req, res, next) => {
    const { senha, confirmaSenha } = req.body;

    if (senha === undefined) {
        return res.status(400).json({ msg: 'O campo Senha é obritatório!' });
    };
    if (senha === '') {
        return res.status(400).json({ msg: 'O campo Senha deve ser preeenchido!' });
    };
    if (confirmaSenha === undefined) {
        return res.status(400).json({ msg: 'O campo Senha é obritatório!' });
    };
    if (confirmaSenha === '') {
        return res.status(400).json({ msg: 'O campo Senha deve ser preeenchido!' });
    };
    next();
};

const validarNivel = async (req, res, next) => {
    const { body } = req;

    if (body.nivel === undefined) {
        return res.status(400).json({ msg: 'O campo Nivel é obritatório!' });
    };
    if (body.nivel === '') {
        return res.status(400).json({ msg: 'O campo Nivel deve ser preeenchido!' });
    };
    next();
};

const validarStatus= async(req, res, next) => {
    const { body } = req;

    if (body.status === undefined) {
        return res.status(400).json({ msg: 'O campo Status é obritatório!' });
    };
    if (body.status === '') {
        return res.status(400).json({ msg: 'O campo Status deve ser preeenchido!' });
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