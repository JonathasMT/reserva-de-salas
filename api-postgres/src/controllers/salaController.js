const baseDados = require('../connection');
const Sala = require('../models/Sala');

const create = async (req, res) => {
    await baseDados.sync();
    const {grupo_id, sala_nome, descricao, capacidade} = req.body;

    //criar o usuario com os dados recebidos
    await Sala.create({
        grupo_id: grupo_id,
        sala_nome: sala_nome,
        descricao: descricao,
        capacidade: capacidade
    }).then((result) => {
        return res.status(200).json({erro: false, msg: 'Sala cadastrada com sucesso.'});
    }).catch((erro) => {
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '});
    });
};

const readVarias = async (_req, res) => {
    await baseDados.sync();
    const salas = await Sala.findAll();
    return res.status(200).json({erro: false, msg: 'Sucesso', salas: salas})
};

module.exports = {
    create,
    readVarias
};