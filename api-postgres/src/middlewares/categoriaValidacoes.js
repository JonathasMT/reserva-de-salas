const Categoria = require("../models/Categoria");
const baseDados = require("../connection");

const validarTitulo = async (req, res, next) => {
    const {categria_nome} = req.body;

    if (!categria_nome) {
        return res.status(400).json({msg: 'O campo Titulo deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await baseDados.sync();
    //verifica se o nome informado já existe
    const existeTitulo = await Categoria.findOne({where : {categria_nome: categria_nome}});
    if (existeTitulo) {
        return res.status(400).json({msg: 'O nome ' + categria_nome + ' já existe!'});
    };
    next();
};

const validarCor = async (req, res, next) => {
    const {cor} = req.body;

    if (!cor) {
        return res.status(400).json({msg: 'O campo Cor deve ser preenchido!'});
    };
    //cria tabela caso não exista 
    await baseDados.sync();
    //verifica se o nome informado já existe
    const existeCor = await Categoria.findOne({where : {cor: cor}});
    if (existeCor) {
        return res.status(400).json({msg: 'A cor ' + cor + ' já existe!'});
    };
    next();
};

module.exports = {
    validarTitulo,
    validarCor
};