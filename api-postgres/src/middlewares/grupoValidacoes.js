const dataBase = require("../db");
const Grupo = require("../models/Grupo");

const validarTitulo = async (req, res, next) => {
    const {titulo} = req.body;

    if (!titulo) {
        return res.status(400).json({msg: 'O campo Titulo deve ser preeenchido!'});
    };
    //cria tabela caso não exista 
    await dataBase.sync();
    //verifica se o titulo informado já existe
    const existeTitulo = await Grupo.findOne({where : {titulo: titulo}});
    if (existeTitulo) {
        return res.status(400).json({msg: 'O titulo ' + titulo + ' já existe!'});
    };
    next();
};

const validarDiasSemana = async (req, res, next) => {
    const {diasSemana} = req.body;

    if (!diasSemana) {
        return res.status(400).json({msg: 'O campo Dias da Semana deve ser preeenchido!'});
    };
    next();
};

const validarHoraInicio = async (req, res, next) => {
    const {horaInicio} = req.body;

    if (!horaInicio) {
        return res.status(400).json({msg: 'O campo Hora inicial deve ser preechido!'});
    };
    if (!dataValida(new Date(horaInicio))) {
        return res.status(400).json({msg: 'O campo Hora inicial está em um formato invalido!'});
    }
    next();
};

const validarHoraFim = async (req, res, next) => {
    const {horaFim} = req.body;

    if (!horaFim) {
        return res.status(400).json({msg: 'O campo Hora final deve ser preechido!'});
    };
    if (!dataValida(new Date(horaFim))) {
        return res.status(400).json({msg: 'O campo Hora final está em um formato invalido!'});
    }
    next();
};

const validarTempoAntecedencia = async (req, res, next) => {
    const {tempoAntecedencia} = req.body;

    if (!tempoAntecedencia) {
        return res.status(400).json({msg: 'O campo Tempo máximo de antecedência deve ser preechido!'});
    };
    if (Number.isInteger(tempoAntecedencia)) {
        return res.status(400).json({msg: 'O campo Tempo máximo de antecedência deve ser um número inteiro!'});
    };
    next();
};

function dataValida(dataHora) {
    const x = dataHora instanceof Date && !isNaN(dataHora);
    console.log(dataHora);
    return x;
};

module.exports = {
    validarTitulo,
    validarDiasSemana,
    validarHoraInicio,
    validarHoraFim,
    validarTempoAntecedencia
};