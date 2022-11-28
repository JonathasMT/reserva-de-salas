const dataBase = require("../connection");
const Grupo = require("../models/Grupo");

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res, next) => {
    try {
        const {titulo, diasSemana, horaInicio, horaFim, tempoAntecedencia} = req.body;
        //verifica  se o titulo está vazio
        if (!titulo) {
            return res.status(200).json({erro: true, msg: 'O campo "Título" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await dataBase.sync();
        //verifica se o titulo informado já existe
        const existeTitulo = await Grupo.findOne({where : {titulo: titulo}});
        if (existeTitulo) {
            return res.status(200).json({erro: true, msg: 'O titulo "' + titulo + '" já existe!'});
        };
        //verifica  se o dias da semana está vazio
        if (!diasSemana.dias || diasSemana.dias.length < 1) {
            return res.status(200).json({erro: true, msg: 'O campo "Dias da semana reserváveis" deve ser preeenchido!'});
        };
        //verifica  se a hora de inicio está vazio
        if (!horaInicio) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" deve ser preechido!'});
        };
        // if (!dataValida(new Date(horaInicio))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" está em um formato invalido!'});
        // };
        //verifica  se a hora de fim está vazio
        if (!horaFim) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora final" deve ser preechido!'});
        };
        // if (!dataValida(new Date(horaFim))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora final" está em um formato invalido!'});
        // };
        //verifica  se o tempo de antecedencia está vazio
        if (!tempoAntecedencia) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser preechido!'});
        };
        if (Number.isInteger(tempoAntecedencia)) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser um número inteiro!'});
        };
        next();
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }

};

const update = async (req, res, next) => {
    try {
        const {titulo, diasSemana, horaInicio, horaFim, tempoAntecedencia} = req.body;
        //verifica  se o titulo está vazio
        if (!titulo) {
            return res.status(200).json({erro: true, msg: 'O campo "Título" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await dataBase.sync();
        //verifica se o titulo informado já existe
        const existeTitulo = await Grupo.findOne({where : {titulo: titulo}});
        if (existeTitulo) {
            return res.status(200).json({erro: true, msg: 'O titulo "' + titulo + '" já existe!'});
        };
        //verifica  se o dias da semana está vazio
        if (!diasSemana) {
            return res.status(200).json({erro: true, msg: 'O campo "Dias da Semana" deve ser preeenchido!'});
        };
        //verifica  se a hora de inicio está vazio
        if (!horaInicio) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" deve ser preechido!'});
        };
        // if (!dataValida(new Date(horaInicio))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" está em um formato invalido!'});
        // };
        //verifica  se a hora de fim está vazio
        if (!horaFim) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora final" deve ser preechido!'});
        };
        // if (!dataValida(new Date(horaFim))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora final" está em um formato invalido!'});
        // };
        //verifica  se o tempo de antecedencia está vazio
        if (!tempoAntecedencia) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser preechido!'});
        };
        if (Number.isInteger(tempoAntecedencia)) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser um número inteiro!'});
        };
    next();
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    };

};

// function dataValida(dataHora) {
//     const x = dataHora instanceof Date && !isNaN(dataHora);
//     console.log(dataHora);
//     return x;
// };

module.exports = {
    create,
    update
};