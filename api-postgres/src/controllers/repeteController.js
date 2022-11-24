const dataBase = require('../connection');
const Repete = require('../models/Repete');

const createRepete = async (req, res) => {
    await dataBase.sync();
    const {repeteTipoId, quantidade} = req.body;

    //criar o usuario com os dados recebidos
    await Repete.create({
        repete_tipo_id: repeteTipoId,
        quantidade: quantidade 
    }).then((resultado) => {
        return res.status(200).json('Repetição cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

module.exports = {
    createRepete
};