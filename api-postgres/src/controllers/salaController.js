const dataBase = require('../models/db');
const Sala = require('../models/Sala');

const createSala = async (req, res) => {
    await dataBase.sync();
    const {grupoId, titulo, descricao, capacidade} = req.body;

    //criar o usuario com os dados recebidos
    await Sala.create({
        grupo_id: grupoId,
        titulo: titulo,
        descricao: descricao,
        capacidade: capacidade
    }).then((resultado) => {
        return res.status(200).json('Sala cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

module.exports = {
    createSala
};