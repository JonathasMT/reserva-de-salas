const Categoria = require("../models/Categoria");
const baseDados = require("../connection");

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res, next) => {
    try {
        const {categoria_nome, cor} = req.body;
        if (!categoria_nome) {
            return res.status(400).json({erro: true, msg: 'O campo "Nome da categoria" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await baseDados.sync();
        //verifica se o nome informado já existe
        const existeNome = await Categoria.findOne({where : {categoria_nome: categoria_nome}});
        if (existeNome) {
            console.log(existeNome);
            return res.status(400).json({erro: true, msg: 'A categoria' + categoria_nome + ' já existe!'});
        };
        //validar cor
        if (!cor) {
            return res.status(400).json({erro: true, msg: 'O campo "Cor" deve ser preenchido!'});
        };
        //verifica se a cor informada já existe
        const existeCor = await Categoria.findOne({where : {cor: cor}});
        if (existeCor) {
            return res.status(400).json({erro: true, msg: 'A cor ' + cor + ' já existe!'});
        };
        next();
    } catch (error) {
        console.log('error');
        return res.status(500).json({erro: true, msg: msgErro});
    };
};

module.exports = {
    create
};