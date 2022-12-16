const baseDados = require('../connection');
const Categoria = require('../models/Categoria');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res) => {
    try {
        const {categoria_nome, cor} = req.body;
         await baseDados.sync();
        //criar o usuario com os dados recebidos
        await Categoria.create({
            categoria_nome: categoria_nome,
            cor: cor
        }).then((result) => {
            return res.status(200).json({erro: false, msg: 'Categoria de reserva cadastrada'});
        }).catch((erro) => {
            res.status(500).json({erro: true, msg: msgErro});
        });
        
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    };
};

const readVarias = async (_req, res) => {
    await baseDados.sync();
    const categorias = await Categoria.findAll();
    return res.status(200).json({erro: false, msg: 'Sucesso', categorias: categorias})
};

module.exports = {
    create,
    readVarias
};