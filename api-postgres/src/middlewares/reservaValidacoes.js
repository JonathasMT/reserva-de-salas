const moment = require('moment');
moment.locale('pt-br');
const baseDados = require("../connection");
const Categoria = require('../models/Categoria');
const Grupo = require('../models/Grupo');
const Recorrencia = require('../models/Recorrencia');
const Reserva = require("../models/reserva");
const Sala = require('../models/Sala');
const Usuario = require('../models/Usuario');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res, next) => {
    try {
        const {sala_id, categoria_id, recorrencia_id, titulo, data, hora_inicio, hora_fim} = req.body;
        const {usuario_id} = req.usuario;
        //----------------------------------------------------------------------------------------------------------------
        //consulta banco de dados
        const sala = await Sala.findOne({where: {sala_id: sala_id}, include: Grupo});
        //busca regras de negocio do Grupo
        const antecedencia = sala.Grupo.antecedencia_minima;
        const inicio = sala.Grupo.hora_inicio;
        const fim = sala.Grupo.hora_fim;
        //----------------------------------------------------------------------------------------------------------------

        //verifica ID do usuario
        if (!usuario_id) {
            return res.status(200).json({erro: true, msg: 'O "ID" do usuário deve ser informado!'});
        };
        if (!Number.isInteger(usuario_id)) {
            return res.status(200).json({erro: true, msg: 'O "ID" do usuário deve ser um número inteiro!'});
        };
        //verifica se o usuario existe
        const usuario = await Usuario.findOne({where : {usuario_id: usuario_id}});
        if (!usuario) {
            return res.status(200).json({erro: true, msg: 'O usuário não foi encontrado!'});
        };
        //verifica ID da sala
        if (!sala_id) {
            return res.status(200).json({erro: true, msg: 'A "Sala" deve ser informada!'});
        };
        if (!Number.isInteger(sala_id)) {
            return res.status(200).json({erro: true, msg: 'O ID do campo "Sala" deve ser um número inteiro!'});
        };
        //verifica se a sala existe
        if (!sala) {
            return res.status(200).json({erro: true, msg: 'A sala não foi encontrada!'});
        };
        //verifica ID da categoria
        if (!categoria_id) {
            return res.status(200).json({erro: true, msg: 'O ID do campo "Categoria" da reserva deve ser informada!'});
        };
        if (!Number.isInteger(categoria_id)) {
            return res.status(200).json({erro: true, msg: 'O ID do campo "Categoria" da reserva deve ser um número inteiro!'});
        };
        //verifica se a categoria existe
        const categoria = await Categoria.findOne({where : {categoria_id: categoria_id}});
        if (!categoria) {
            return res.status(200).json({erro: true, msg: 'A categoria não foi encontrada!'});
        };
        //verifica ID da recorrencia
        if (recorrencia_id) {
            if (Number.isInteger(recorrencia_id)) {
                return res.status(200).json({erro: true, msg: 'O ID do campo "Repetir" deve ser um número inteiro!'});
            };
            //verifica se a recorrencia existe
            const recorrencia = await Recorrencia.findOne({where : {recorrencia_id: recorrencia_id}});
            if (!recorrencia) {
                return res.status(200).json({erro: true, msg: 'A recorrencia não foi encontrada!'});
            };
        };
        //verifica Titulo
        if (!titulo) {
            return res.status(200).json({erro: true, msg: 'O campo "Titulo" deve ser preeenchido!'});
        };
        //verifica Data
        if (!data) {
            return res.status(200).json({erro: true, msg: 'O campo "Data" deve ser preeenchido!'});
        };
        if (!dataValida(data)) {
            return res.status(200).json({erro: true, msg: 'O campo "Data" está em um formato inválido!'});
        };
        if (!dataAtual(data)) {
            return res.status(200).json({erro: true, msg: 'A "Data" não pode ser anterior ao dia atual.'});
        };
        //verifica Hora de inicio
        if (!hora_inicio) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechidos!'});
        };
        if (tempoAntecedencia(data, hora_inicio) < antecedencia) {
            return res.status(200).json({erro: true, msg: 'O horario de inicio da reserva deve ter no minimo "' + 60 + ' minutos de antecedência".'
            });
        };
        if (inicioValido(data, inicio, hora_inicio)) {
            return res.status(200).json({erro: true, msg: 'O horario de inicio da reserva deve ter no minimo "' + 60 + ' minutos de antecedência".'
            });
        };
        //verifica Hora de encerramento
        if (!hora_fim) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechidos!'});
        };
        if (inicioFimValido(data, hora_inicio, hora_fim) < 1) {
            return res.status(200).json({erro: true, msg: 'O horario de termino da reserva deve ser posterior ao inicio.'
            });
        };

        return res.status(200).json({erro: true, msg: 'Teste interronpido'});

        next();
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

const update = async (req, res, next) => {
    try {
        const {usuario_id, sala_id, categoria_id, recorrencia_id, titulo, hora_inicio, hora_fim} = req.body;
        //verifica ID do usuario
        if (!usuario_id) {
            return res.status(200).json({erro: true, msg: 'O Usuário deve ser informado!'});
        };
        if (Number.isInteger(usuario_id)) {
            return res.status(200).json({erro: true, msg: 'O campo Usuário deve ser um número inteiro!'});
        };
        //verifica ID da sala
        if (!sala_id) {
            return res.status(200).json({erro: true, msg: 'A Sala deve ser informada!'});
        };
        if (Number.isInteger(sala_id)) {
            return res.status(200).json({erro: true, msg: 'O campo Sala deve ser um número inteiro!'});
        };
        //verifica ID da categoria
        if (!categoria_id) {
            return res.status(200).json({erro: true, msg: 'A Categoria da reserva deve ser informada!'});
        };
        if (Number.isInteger(categoria_id)) {
            return res.status(200).json({erro: true, msg: 'O campo Categoria da reserva deve ser um número inteiro!'});
        };
        //verifica ID da repetição
        if (recorrencia_id) {
            if (Number.isInteger(recorrencia_id)) {
                return res.status(200).json({erro: true, msg: 'O campo Repetir deve ser um número inteiro!'});
            };
        };
        //verifica Titulo
        if (!titulo) {
            return res.status(200).json({erro: true, msg: 'O campo Titulo deve ser preeenchido!'});
        };
        //verifica Hora de inicio
        if (!hora_inicio) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechido!'});
        };
        if (!dataValida(hora_inicio)) {
            return res.status(200).json({erro: true, msg: 'O campo Hora inicial está em um formato invalido!'});
        }
        //verifica Hora de encerramento
        if (!hora_fim) {
            return res.status(200).json({erro: true, msg: 'Os campos "Horário de inicio e fim da reserva" devem ser preechido!'});
        };
        if (!dataValida(hora_fim)) {
            return res.status(200).json({erro: true, msg: 'O campo Hora final está em um formato invalido!'});
        }
        next();
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

//FUNÇÕES
function dataValida(data) {
    return moment(data).isValid();
};
function dataAtual(data) {
        const atual = moment().format('YYYY-MM-DD');
    return moment(data).isSameOrAfter(atual);
};
function tempoAntecedencia(data, hora_inicio) {
        const atual = moment().format('YYYY-MM-DD HH:mm');
        const diferenca = moment(data + ' ' + hora_inicio).diff(atual, 'minutes');
    return diferenca;
};
function inicioValido(data, inicio, hora_inicio) {
    const inicioMinimo = moment(data + ' ' + inicio);
    const diferenca = moment(data + ' ' + hora_inicio).diff(inicioMinimo, 'minutes');
return diferenca;
};
function fimValido(data, hora_inicio, hora_fim) {
    const inicio = moment(data + ' ' + hora_inicio);
    const diferenca = moment(data + ' ' + hora_fim).diff(inicio, 'minutes');
return diferenca;
};
function inicioFimValido(data, hora_inicio, hora_fim) {
    const inicio = moment(data + ' ' + hora_inicio);
    const diferenca = moment(data + ' ' + hora_fim).diff(inicio, 'minutes');
return diferenca;
};

module.exports = {
    create,
    update
};