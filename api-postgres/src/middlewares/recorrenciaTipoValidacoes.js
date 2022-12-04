const baseDados = require("../connection");
const Recorrencia_tipo = require("../models/RecorrenciaTipo");

const validarTitulo = async (req, res, next) => {
    const {recorrencia_tipo_nome} = req.body;

    if (!recorrencia_tipo_nome) {
        return res.status(400).json({erro: true, msg: 'O campo Titulo deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await baseDados.sync();
    //verifica se o nome informado já existe
    const existeTitulo = await Recorrencia_tipo.findOne({where : {recorrencia_tipo_nome: recorrencia_tipo_nome}});
    if (existeTitulo) {
        return res.status(400).json({erro: true, msg: 'O nome ' + recorrencia_tipo_nome + ' já existe!'});
    };
    next();
};

module.exports = {
    validarTitulo
};