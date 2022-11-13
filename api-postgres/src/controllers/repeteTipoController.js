const dataBase = require('../models/db');
const RepeteTipo = require('../models/RepeteTipo');

const createRepeteTipo = async (req, res) => {
    await dataBase.sync();
    const {titulo} = req.body;

    //criar o usuario com os dados recebidos
    await RepeteTipo.create({
        titulo: titulo
    }).then((resultado) => {
        return res.status(200).json('Tipo de repetição cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

module.exports = {
    createRepeteTipo
};