const baseDados = require('../connection');
const Categoria = require('../models/Categoria');

const create = async (req, res) => {
    await baseDados.sync();
    const {categoria_nome, descricao, cor} = req.body;

    //criar o usuario com os dados recebidos
    await Categoria.create({
        categoria_nome: categoria_nome,
        descricao: descricao,
        cor: cor
    }).then((result) => {
        return res.status(200).json('Categoria de reserva cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

const readVarias = async (_req, res) => {
    await baseDados.sync();
    const categorias = await Categoria.findAll();
    console.log(categorias)
    return res.status(200).json({erro: false, msg: 'Sucesso', categorias: categorias})
};

module.exports = {
    create,
    readVarias
};