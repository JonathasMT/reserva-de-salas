const dataBase = require('../connection');
const Categoria = require('../models/Categoria');
const Grupo = require('../models/Grupo');
const Repete = require('../models/Repete');
const Reserva = require('../models/Reserva');
const Sala = require('../models/Sala');
const Usuario = require('../models/Usuario');

const create= async (req, res) => {
    await dataBase.sync();
    const {
        usuarioId,
        salaId,
        categoriaId,
        repeteId,
        titulo,
        descricao,
        data,
        horaInicio,
        horaFim
    } = req.body;

    //criar o usuario com os dados recebidos
    await Reserva.create({
        usuario_id: usuarioId,
        sala_id: salaId,
        categoria_id: categoriaId,
        repete_id: repeteId,
        titulo: titulo,
        descricao: descricao,
        data: data,
        hora_inicio: horaInicio,
        hora_fim: horaFim
    }).then((_result) => {
        return res.status(200).json({erro: false, msg: 'Reserva cadastrada'});
    }).catch((erro) => {
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

const read = async (req, res) => {
    try {
        await dataBase.sync();
        const {reservaId} = req.body
        //busca a reserva
        const reserva = await Reserva.findOne({where: {reserva_id: reservaId}});
        //verifica se existe a instituição buscada
        if (!reserva) {
            return res.status(200).json({erro: true, msg: 'Reserva não encontrada!'});
        }else {
            return res.status(200).json({erro: false, msg: reserva})
        }
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

const readVarias = async (_req, res) => {
    await dataBase.sync();
    const reservas = await Reserva.findAll();
    return res.status(200).json({erro: false, msg: 'Sucesso', reservas: reservas})
};

const readMinhasVarias = async (req, res) => {
    await dataBase.sync();
    const {usuario_id} = req.usuario;
    const reservas = await Reserva.findAll({include: Categoria});
    return res.status(200).json({erro: false, msg: 'Sucesso', minhasReservas: reservas})
};

const update= async (req, res) => {
    await dataBase.sync();
    const {
        usuarioId,
        salaId,
        categoriaId,
        repeteId,
        titulo,
        descricao,
        data,
        horaInicio,
        horaFim
    } = req.body;

    //criar o usuario com os dados recebidos
    await Reserva.create({
        usuario_id: usuarioId,
        sala_id: salaId,
        categoria_id: categoriaId,
        repete_id: repeteId,
        titulo: titulo,
        descricao: descricao,
        data: data,
        hora_inicio: horaInicio,
        hora_fim: horaFim
    }).then((_result) => {
        return res.status(200).json({erro: false, msg: 'Reserva cadastrada'});
    }).catch((_erro) => {
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '});
    });
};

module.exports = {
    create,
    read,
    readVarias,
    readMinhasVarias,
    update
};