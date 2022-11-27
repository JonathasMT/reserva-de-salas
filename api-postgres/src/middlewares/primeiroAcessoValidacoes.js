const dataBase = require('../connection');


const Instituicao = require('../models/Instituicao');
const Usuario = require('../models/Usuario');

const tamanhoBd= async (_req, res, next) => {
    try {
        await dataBase.sync();
        
        const i = await Instituicao.findAndCountAll();
        const u = await Usuario.findAndCountAll();

        const instituicao = i.count;
        const usuario = u.count;

        console.log('Inst > ' + instituicao);
        console.log('Usua > ' + usuario);

        await dataBase.sync();

        if(instituicao > 0 || usuario > 0) {
        //o banco de dados já possui registros
            return res.status(200).json({erro: true, msg: 'Não autorizado. O banco de dados já possui cadastros.'});
        }else {
            next();
        };

    } catch (_error) {
        return res.status(500).json({msg: msgErro});
        
    };
};

//######################################################################################################################################################

const cadastro = async (req, res, next) => {
    const {instituicaoNome, nome, email, nivel, status, senha, confirmaSenha} = req.body;

    //-----------------------------------------------------------------------------------------------------
    //validações instituição
    if (!instituicaoNome) {
        return res.status(400).json({msg: 'O campo "Nome da intituição" deve ser preeenchido!' });
    };
    //-----------------------------------------------------------------------------------------------------
    //validações usuario
    //validar nome
    if (!nome) {
        return res.status(400).json({msg: 'O campo "Nome do usuário" deve ser preeenchido!' });
    };
    //validar email
    if (!email) {
        return res.status(400).json({msg: 'O campo "E-mail" deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o e-mail informado já existe
    const existeEmail = await Usuario.findOne({where : {email: email}});
    if (existeEmail) {
        return res.status(400).json({msg: 'O e-mail ' + email + ' já existe!'});
    };
    //validar nivel
    if (nivel) {
        return res.status(400).json({msg: 'Não insira o nivel de usuário no primeiro acesso, ele sera definido automaticamente pela api'});
    };
    //validar status
    if (status) {
        return res.status(400).json({msg: 'Não insira o status de usuário no primeiro acesso, ele sera definido automaticamente pela api'});
    };
    //validar senhas
    if (!senha) {
        return res.status(400).json({msg: 'O campo "Senha" deve ser preeenchido!'});
    };
    if (!confirmaSenha) {
        return res.status(400).json({msg: 'O campo "Repita a senha" deve ser preeenchido!'});
    };
    if (confirmaSenha != senha ) {
        return res.status(400).json({msg: 'As senhas devem ser iguais!'});
    };
    next();
};

module.exports = {
    tamanhoBd,
    cadastro
};