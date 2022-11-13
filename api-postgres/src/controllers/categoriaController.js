const dataBase = require('../models/db');
const Categoria = require('../models/Categoria');

const createCategoria = async (req, res) => {
    await dataBase.sync();
    const {titulo, descricao, cor} = req.body;

    //criar o usuario com os dados recebidos
    await Categoria.create({
        titulo: titulo,
        descricao: descricao,
        cor: cor
    }).then((resultado) => {
        return res.status(200).json('Categoria de reserva cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

module.exports = {
    createCategoria
};