const baseDados = require('../connection');


const Instituicao = require('../models/Instituicao');
const Usuario = require('../models/Usuario');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';


const tamanhoBd= async (_req, res, next) => {
    try {
        await baseDados.sync();
        
        const i = await Instituicao.findAndCountAll();
        const u = await Usuario.findAndCountAll();

        const instituicao = i.count;
        const usuario = u.count;

        console.log('Inst > ' + instituicao);
        console.log('Usu > ' + usuario);

        await baseDados.sync();

        if(instituicao > 0 || usuario > 0) {
        //o banco de dados já possui registros
            return res.status(200).json({erro: true, msg: 'Não autorizado. O banco de dados já possui cadastros.'});
        }else {
            next();
        };

    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro});
    };
};

//######################################################################################################################################################

const cadastro = async (req, res, next) => {
    try {
        const {instituicao_nome, usuario_nome, email, nivel, status, senha, confirmaSenha} = req.body;

        //-----------------------------------------------------------------------------------------------------
        //validações instituição
        if (!instituicao_nome) {
            return res.status(200).json({erro: true, msg: 'O campo "Nome da intituição" deve ser preeenchido!' });
        };
        //-----------------------------------------------------------------------------------------------------
        //validações usuario
        //validar nome
        if (!usuario_nome) {
            return res.status(200).json({erro: true, msg: 'O campo "Nome do usuário" deve ser preeenchido!' });
        };
        //validar email
        if (!email) {
            return res.status(200).json({erro: true, msg: 'O campo "E-mail" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await baseDados.sync();
        //verifica se o e-mail informado já existe
        const existeEmail = await Usuario.findOne({where : {email: email}});
        if (existeEmail) {
            return res.status(200).json({erro: true, msg: 'O e-mail ' + email + ' já existe!'});
        };
        //validar nivel
        if (nivel) {
            return res.status(200).json({erro: true, msg: 'Não insira o nivel de usuário no primeiro acesso, ele sera definido automaticamente pela api'});
        };
        //validar status
        if (status) {
            return res.status(200).json({erro: true, msg: 'Não insira o status de usuário no primeiro acesso, ele sera definido automaticamente pela api'});
        };
        //validar senhas
        if (!senha) {
            return res.status(200).json({erro: true, erro: true, msg: 'O campo "Senha" deve ser preeenchido!'});
        };
        if (!confirmaSenha) {
            return res.status(200).json({erro: true, msg: 'O campo "Repita a senha" deve ser preeenchido!'});
        };
        if (confirmaSenha != senha ) {
            return res.status(200).json({erro: true, msg: 'As senhas devem ser iguais!'});
        };
        next();
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    };
};

module.exports = {
    tamanhoBd,
    cadastro
};