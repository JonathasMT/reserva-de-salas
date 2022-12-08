const Categoria = require("../models/Categoria");
const baseDados = require("../connection");

const create = async (req, res, next) => {
    const {categoria_nome, cor} = req.body;
    console.log(categoria_nome);
    console.log(cor);

    if (!categoria_nome) {
        return res.status(400).json({erro: true, msg: 'O campo "Nome da categoria" deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await baseDados.sync();
    //verifica se o nome informado já existe
    const existeNome = await Categoria.findOne({where : {categria_nome: categoria_nome}});
    if (existeNome) {
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
};

module.exports = {
    create
};