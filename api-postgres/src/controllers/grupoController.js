const dataBase = require('../db');
const Grupo = require('../models/Grupo');

const createGrupo = async (req, res) => {
    await dataBase.sync();
    const {
        titulo,
        descricao,
        diasSemana,
        horaInicio,
        horaFim,
        tempoAntecedencia
    } = req.body;

    console.log(JSON.stringify(diasSemana));

    //criar o usuario com os dados recebidos
    await Grupo.create({
        titulo: titulo,
        descricao: descricao,
        dias_semana: diasSemana,
        hora_inicio: horaInicio,
        hora_fim: horaFim,
        tempo_antecedencia: tempoAntecedencia
    }).then((resultado) => {
        return res.status(200).json('Grupo cadastrado');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

module.exports = {
    createGrupo
};