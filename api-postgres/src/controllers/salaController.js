const dataBase = require('../connection');
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
    }).then((result) => {
        return res.status(200).json('Sala cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

const readVarias = async (_req, res) => {
    await dataBase.sync();
    const salas = await Sala.findAll();
    return res.status(200).json({erro: false, msg: 'Sucesso', salas: salas})
};

module.exports = {
    createSala,
    readVarias
};