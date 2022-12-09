const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const baseDados = require('../connection');
const Usuario = require('../models/Usuario');
const Instituicao = require('../models/Instituicao');

const create = async (req, res, next) => {
    try {
        const {nome, email, senha, confirma_senha, nivel} = req.body;

        //validar nome
        if (!nome) {
            return res.status(400).json({erro: true, msg: 'O campo "Nome" deve ser preeenchido!' });
        };
        //validar email
        if (!email) {
            return res.status(400).json({erro: true, msg: 'O campo "Email" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await baseDados.sync();
        //verifica se o e-mail informado já existe
        const existeEmail = await Usuario.findOne({where : {email: email}});
        if (existeEmail) {
            return res.status(400).json({erro: true, msg: 'O campo e-mail "' + email + '" já existe!'});
        };
        //validar senhas
        if (!senha) {
            return res.status(400).json({erro: true, msg: 'O campo "Senha" deve ser preeenchido!'});
        };
        if (!confirma_senha) {
            return res.status(400).json({erro: true, msg: 'O campo "Confirmar senha" deve ser preeenchido!'});
        };
        if (confirma_senha != senha ) {
            return res.status(400).json({erro: true, msg: 'As senhas devem ser iguais!'});
        };
        //validar nivel
        if (!nivel) {
            return res.status(400).json({erro: true, msg: 'O campo "Nivel" deve ser preeenchido!'});
        };
        if (Number.isInteger(nivel)) {
            return res.status(400).json({erro: true, msg: 'O campo "Nível" deve ser um número inteiro!'});
        };

        next();

    } catch (error) {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+error});
    };
};

const updatePerfil = async (req, res, next) => {
    try {
        const {usuario_nome, email, alterar_senha, senha, nova_senha, confirma_nova_senha} = req.body;
        const {usuario_id} = req.usuario;

        //validar nome
        if (!usuario_nome) {
            return res.status(400).json({erro: true, msg: 'O campo "Nome" deve ser preeenchido!' });
        };
        //validar email
        if (!email) {
            return res.status(400).json({erro: true, msg: 'O campo "Email" deve ser preeenchido!'});
        };
        //busca o usuario
        await baseDados.sync();
        const usuario = await Usuario.findOne({where : {usuario_id: usuario_id}});
        if (!usuario) {
            return res.status(400).json({erro: true, msg: 'Usuário não foi encontrado!'});
        };
        //validar senhas
        if (alterar_senha) {
            const verificaSenha = await bcrypt.compare(senha, usuario.senha);
            if(!verificaSenha) {
                return res.status(422).json({erro: true, msg: 'Senha atual incorreta!'});
            };
            if (!nova_senha) {
                return res.status(400).json({erro: true, msg: 'O campo "Nova senha" deve ser preeenchido!'});
            };
            if (!confirma_nova_senha) {
                return res.status(400).json({erro: true, msg: 'O campo "Repita a nova senha" deve ser preeenchido!'});
            };
            if (nova_senha != confirma_nova_senha ) {
                return res.status(400).json({erro: true, msg: 'O campo "Nova senha e Repita a nova senha" devem ser iguais!'});
            };
        };
        req.usuario = usuario;

        next();

    } catch (error) {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+error});
    };
};

const login = async (req, res, next) => {

    try {
        const {email, senha} = req.body;

        //verifica se o e-mail foi preenchido
        if (!email) {
            return res.status(400).json({erro: true, msg: 'O campo "Email" deve ser preeenchido!'});
        };
        //verifica se a senha foi preenchida
        if (!senha) {
            return res.status(400).json({erro: true, msg: 'O campo "Senha" deve ser preeenchido!'});
        };
        //verifica se o e-mail informado existe
        await baseDados.sync();
        const usuario = await Usuario.findOne({where : {email: email}});
        if (!usuario) {
            return res.status(400).json({erro: true, msg: 'E-mail "' + email + '" não foi encontrado!'});
        };
        //verifica se a senha informada está correta
        const verificaSenha = await bcrypt.compare(senha, usuario.senha);
        if(!verificaSenha) {
            return res.status(422).json({erro: true, msg: 'Senha incorreta!'});
        };
        //verifica se existe instituição no banco de dados
        const instituicao = await Instituicao.findOne({where: {instituicao_id: 1}});
        //verifica se existe a instituição buscada
        if (!instituicao) {
            return res.status(200).json({erro: true, msg: 'Instituição não encontrada!'});
        };
        //Incluo a instituiçao e usuario na requisição para não precisar buscar novamente.
        req.body.instituicao = instituicao;
        req.body.usuario = usuario;
        next();
        
    } catch (error) {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+error});
    }



};

const credenciais = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodificado = jwt.verify(token, process.env.SECRET);
        req.usuario = decodificado;
        req.token = token;
        next();
    } catch (_error) {
        return res.status(401).send({erro: true, msg: 'Não autorizado!'});
    };

};

module.exports = {
    create,
    updatePerfil,
    login,
    credenciais
};