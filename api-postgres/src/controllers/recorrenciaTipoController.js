const baseDados = require('../connection');
const RecorrenciaTipo = require('../models/RecorrenciaTipo');

const create = async (req, res) => {
    await baseDados.sync();
    const {recorrencia_nome} = req.body;

    //criar o usuario com os dados recebidos
    await RecorrenciaTipo.create({
        recorrencia_nome: recorrencia_nome
    }).then((result) => {
        return res.status(200).json({erro: false, msg: 'Tipo de repetição cadastrada'});
    }).catch((erro) => {
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '});
    });
};

module.exports = {
    create
};