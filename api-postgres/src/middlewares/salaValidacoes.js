const dataBase = require("../connection");
const Sala = require("../models/Sala");

const validarGrupoId = async (req, res, next) => {
    const {grupoId} = req.body;

    if (!grupoId) {
        return res.status(400).json({msg: 'O Grupo da sala deve ser informado!'});
    };
    if (Number.isInteger(grupoId)) {
        return res.status(400).json({msg: 'O campo Grupo de sala deve ser um número inteiro!'});
    };
    next();
};

const validarTitulo = async (req, res, next) => {
    const {titulo} = req.body;

    if (!titulo) {
        return res.status(400).json({msg: 'O campo Titulo deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o titulo informado já existe
    const existeTitulo = await Sala.findOne({where : {titulo: titulo}});
    if (existeTitulo) {
        return res.status(400).json({msg: 'O titulo ' + titulo + ' já existe!'});
    };
    next();
};

const validarCapacidade = async (req, res, next) => {
    const {capacidade} = req.body;

    if (capacidade) {
        if (Number.isInteger(capacidade)) {
            return res.status(400).json({msg: 'O campo Capacidade deve ser um número inteiro!'});
        };
    };
    next();
};

module.exports = {
    validarGrupoId,
    validarTitulo,
    validarCapacidade
};