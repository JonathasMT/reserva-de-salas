const dataBase = require("../models/db");
const Repete_tipo = require("../models/RepeteTipo");

const validarTitulo = async (req, res, next) => {
    const {titulo} = req.body;

    if (!titulo) {
        return res.status(400).json({msg: 'O campo Titulo deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o titulo informado já existe
    const existeTitulo = await Repete_tipo.findOne({where : {titulo: titulo}});
    if (existeTitulo) {
        return res.status(400).json({msg: 'O titulo ' + titulo + ' já existe!'});
    };
    next();
};

module.exports = {
    validarTitulo
};