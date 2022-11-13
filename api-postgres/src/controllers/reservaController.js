const dataBase = require('../models/db');
const Reserva = require('../models/Reserva');

const createReserva = async (req, res) => {
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
    }).then((resultado) => {
        return res.status(200).json('Reserva cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

module.exports = {
    createReserva
};