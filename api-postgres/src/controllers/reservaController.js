const baseDados = require('../connection');
const Categoria = require('../models/Categoria');
const Grupo = require('../models/Grupo');
const Recorrencia = require('../models/Recorrencia');
const Reserva = require('../models/Reserva');
const Sala = require('../models/Sala');
const Usuario = require('../models/Usuario');

const create= async (req, res) => {
    await baseDados.sync();
    const {
        usuario_id,
        sala_id,
        categoria_id,
        recorrencia_id,
        titulo,
        descricao,
        data,
        hora_inicio,
        hora_fim
    } = req.body;

    //criar o usuario com os dados recebidos
    await Reserva.create({
        usuario_id: usuario_id,
        sala_id: sala_id,
        categoria_id: categoria_id,
        recorrencia_id: recorrencia_id,
        titulo: titulo,
        descricao: descricao,
        data: data,
        hora_inicio: hora_inicio,
        hora_fim: hora_fim
    }).then((_result) => {
        return res.status(200).json({erro: false, msg: 'Reserva cadastrada'});
    }).catch((erro) => {
        console.log(erro);
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '});
    });
};

const read = async (req, res) => {
    try {
        await baseDados.sync();
        const {reserva_id} = req.body
        //busca a reserva
        const reserva = await Reserva.findOne({where: {reserva_id: reserva_id}});
        //verifica se existe a instituição buscada
        if (!reserva) {
            return res.status(200).json({erro: true, msg: 'Reserva não encontrada!'});
        }else {
            return res.status(200).json({erro: false, msg: reserva})
        }
    } catch (_error) {
        return res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '})
    }
};

const readVarias = async (_req, res) => {
    try {
        await baseDados.sync();
        const reservas = await Reserva.findAll();
        return res.status(200).json({erro: false, msg: 'Sucesso', reservas: reservas});
    } catch (_error) {
        return res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'})
    };
};

// await Ship.findAll({include: {model: Captain, as: 'leader'}})

const readMinhasVarias = async (req, res) => {
    await baseDados.sync();
    // const {usuario_id} = req.usuario;
    const reservas = await Reserva.findAll({include: [ {model: Categoria, required: true},{model: Sala, include: [{model: Grupo}]} ]});
    // const reservas = await Reserva.findAll({include: [{model: Categoria, required: true},{model: Sala, include: {model: Grupo, required: true}}]});

    return res.status(200).json({erro: false, msg: 'Sucesso', minhasReservas: reservas})
};

const update= async (req, res) => {
    await baseDados.sync();
    const {
        usuario_id,
        sala_id,
        categoria_id,
        recorrencia_id,
        titulo,
        descricao,
        data,
        hora_inicio,
        hora_fim
    } = req.body;

    //criar o usuario com os dados recebidos
    await Reserva.create({
        usuario_id: usuario_id,
        sala_id: sala_id,
        categoria_id: categoria_id,
        recorrencia_id: recorrencia_id,
        titulo: titulo,
        descricao: descricao,
        data: data,
        hora_inicio: hora_inicio,
        hora_fim: hora_fim
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