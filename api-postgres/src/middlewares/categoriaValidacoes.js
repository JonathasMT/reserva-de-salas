const Categoria = require("../models/Categoria");
const dataBase = require("../connection");

const validarTitulo = async (req, res, next) => {
    const {titulo} = req.body;

    if (!titulo) {
        return res.status(400).json({msg: 'O campo Titulo deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o titulo informado já existe
    const existeTitulo = await Categoria.findOne({where : {titulo: titulo}});
    if (existeTitulo) {
        return res.status(400).json({msg: 'O titulo ' + titulo + ' já existe!'});
    };
    next();
};

const validarCor = async (req, res, next) => {
    const {cor} = req.body;

    if (!cor) {
        return res.status(400).json({msg: 'O campo Cor deve ser preenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o titulo informado já existe
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