const baseDados = require('../connection');
const Recorrencia = require('../models/Recorrencia');

const create = async (req, res) => {
    await baseDados.sync();
    const {recorrencia_tipo_id, quantidade} = req.body;

    //criar o usuario com os dados recebidos
    await Recorrencia.create({
        recorrencia_tipo_id: recorrencia_tipo_id,
        quantidade: quantidade 
    }).then((result) => {
        return res.status(200).json('Repetição cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '});
    });
};

module.exports = {
    create
};