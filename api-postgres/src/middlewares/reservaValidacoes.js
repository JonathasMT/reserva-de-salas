const dataBase = require("../connection");
const Reserva = require("../models/reserva");

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res, next) => {
    try {
        const {usuarioId, salaId, categoriaId, repeteId, titulo, horaInicio, horaFim} = req.body;
        //verifica ID do usuario
        if (!usuarioId) {
            return res.status(200).json({erro: true, msg: 'O Usuário deve ser informado!'});
        };
        if (Number.isInteger(usuarioId)) {
            return res.status(200).json({erro: true, msg: 'O campo Usuário deve ser um número inteiro!'});
        };
        //verifica ID da sala
        if (!salaId) {
            return res.status(200).json({erro: true, msg: 'A Sala deve ser informada!'});
        };
        if (Number.isInteger(salaId)) {
            return res.status(200).json({erro: true, msg: 'O campo Sala deve ser um número inteiro!'});
        };
        //verifica ID da categoria
        if (!categoriaId) {
            return res.status(200).json({erro: true, msg: 'A Categoria da reserva deve ser informada!'});
        };
        if (Number.isInteger(categoriaId)) {
            return res.status(200).json({erro: true, msg: 'O campo Categoria da reserva deve ser um número inteiro!'});
        };
        //verifica ID da repetição
        if (repeteId) {
            if (Number.isInteger(repeteId)) {
                return res.status(200).json({erro: true, msg: 'O campo Repetir deve ser um número inteiro!'});
            };
        };
        //verifica Titulo
        if (!titulo) {
            return res.status(200).json({erro: true, msg: 'O campo Titulo deve ser preeenchido!'});
        };
        //verifica Hora de inicio
        if (!horaInicio) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechido!'});
        };
        //verifica Hora de encerramento
        if (!horaFim) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechido!'});
        };
        next();
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

const update = async (req, res, next) => {
    try {
        const {usuarioId, salaId, categoriaId, repeteId, titulo, horaInicio, horaFim} = req.body;
        //verifica ID do usuario
        if (!usuarioId) {
            return res.status(200).json({erro: true, msg: 'O Usuário deve ser informado!'});
        };
        if (Number.isInteger(usuarioId)) {
            return res.status(200).json({erro: true, msg: 'O campo Usuário deve ser um número inteiro!'});
        };
        //verifica ID da sala
        if (!salaId) {
            return res.status(200).json({erro: true, msg: 'A Sala deve ser informada!'});
        };
        if (Number.isInteger(salaId)) {
            return res.status(200).json({erro: true, msg: 'O campo Sala deve ser um número inteiro!'});
        };
        //verifica ID da categoria
        if (!categoriaId) {
            return res.status(200).json({erro: true, msg: 'A Categoria da reserva deve ser informada!'});
        };
        if (Number.isInteger(categoriaId)) {
            return res.status(200).json({erro: true, msg: 'O campo Categoria da reserva deve ser um número inteiro!'});
        };
        //verifica ID da repetição
        if (repeteId) {
            if (Number.isInteger(repeteId)) {
                return res.status(200).json({erro: true, msg: 'O campo Repetir deve ser um número inteiro!'});
            };
        };
        //verifica Titulo
        if (!titulo) {
            return res.status(200).json({erro: true, msg: 'O campo Titulo deve ser preeenchido!'});
        };
        //verifica Hora de inicio
        if (!horaInicio) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechido!'});
        };
        if (!dataValida(horaInicio)) {
            return res.status(200).json({erro: true, msg: 'O campo Hora inicial está em um formato invalido!'});
        }
        //verifica Hora de encerramento
        if (!horaFim) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechido!'});
        };
        if (!dataValida(horaFim)) {
            return res.status(200).json({erro: true, msg: 'O campo Hora final está em um formato invalido!'});
        }
        next();
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

module.exports = {
    create,
    update
};