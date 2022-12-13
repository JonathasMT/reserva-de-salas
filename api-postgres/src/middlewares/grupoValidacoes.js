const baseDados = require("../connection");
const Grupo = require("../models/Grupo");

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res, next) => {
    try {
        const {grupo_nome, dias_semana, hora_inicio, hora_fim, antecedencia_minima} = req.body;
        //verifica  se o nome está vazio
        if (!grupo_nome) {
            return res.status(200).json({erro: true, msg: 'O campo "Título" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await baseDados.sync();
        //verifica se o nome informado já existe
        const existeTitulo = await Grupo.findOne({where : {grupo_nome: grupo_nome}});
        if (existeTitulo) {
            return res.status(200).json({erro: true, msg: 'O nome "' + grupo_nome + '" já existe!'});
        };
        //verifica  se o dias da semana está vazio
        if (!dias_semana.dias || dias_semana.dias.length < 1) {
            return res.status(200).json({erro: true, msg: 'O campo "Dias da semana reserváveis" deve ser preeenchido!'});
        };
        //verifica  se a hora de inicio está vazio
        if (!hora_inicio) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" deve ser preechido!'});
        };
        // if (!dataValida(new Date(hora_inicio))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" está em um formato invalido!'});
        // };
        //verifica  se a hora de fim está vazio
        if (!hora_fim) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora final" deve ser preechido!'});
        };
        // if (!dataValida(new Date(hora_fim))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora final" está em um formato invalido!'});
        // };
        //verifica  se o tempo de antecedencia está vazio
        if (!antecedencia_minima) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser preechido!'});
        };
        if (!Number.isInteger(+antecedencia_minima)) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser um número inteiro!'});
        };
        next();
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }

};

const update = async (req, res, next) => {
    try {
        const {grupo_nome, diasSemana, hora_inicio, hora_fim, tempoAntecedencia} = req.body;
        //verifica  se o nome está vazio
        if (!grupo_nome) {
            return res.status(200).json({erro: true, msg: 'O campo "Título" deve ser preeenchido!'});
        };
        //cria tabela caso não exista 
        await baseDados.sync();
        //verifica se o nome informado já existe
        const existeTitulo = await Grupo.findOne({where : {grupo_nome: grupo_nome}});
        if (existeTitulo) {
            return res.status(200).json({erro: true, msg: 'O nome "' + grupo_nome + '" já existe!'});
        };
        //verifica  se o dias da semana está vazio
        if (!diasSemana) {
            return res.status(200).json({erro: true, msg: 'O campo "Dias da Semana" deve ser preeenchido!'});
        };
        //verifica  se a hora de inicio está vazio
        if (!hora_inicio) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" deve ser preechido!'});
        };
        // if (!dataValida(new Date(hora_inicio))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora inicial" está em um formato invalido!'});
        // };
        //verifica  se a hora de fim está vazio
        if (!hora_fim) {
            return res.status(200).json({erro: true, msg: 'O campo "Hora final" deve ser preechido!'});
        };
        // if (!dataValida(new Date(hora_fim))) {
        //     return res.status(200).json({erro: true, msg: 'O campo "Hora final" está em um formato invalido!'});
        // };
        //verifica  se o tempo de antecedencia está vazio
        if (!tempoAntecedencia) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser preechido!'});
        };
        if (!Number.isInteger(tempoAntecedencia)) {
            return res.status(200).json({erro: true, msg: 'O campo "Mínimo de antecedencia para reservas" deve ser um número inteiro!'});
        };
    next();
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    };
};

module.exports = {
    create,
    update
};