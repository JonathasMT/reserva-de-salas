const baseDados = require('../connection');
const Instituicao = require('../models/Instituicao');

const update = async (req, res, next) => {
    const {instituicao_nome} = req.body;
    //-----------------------------------------------------------------------------------------------------
    //validações instituição
    if (!instituicao_nome) {
        return res.status(200).json({erro:true, msg: 'O campo "Nome da intituição" deve ser preeenchido!'});
    };
    if (instituicao_nome.length < 2) {
        return res.status(200).json({erro:true, msg: 'O campo "Nome da intituição" deve possuir no mínimo 2 caracteres!'});
    };
    //verifica se a instituição existe
    await baseDados.sync();
    const instituicao = await Instituicao.findOne({where: {instituicao_id: 1}});
    //verifica se existe a instituição buscada
    if (!instituicao) {
        return res.status(200).json({erro: true, msg: 'Instituição não encontrada!'});
    };
    //Incluo a instituiçao na requisição para não precisar buscar novamente.
    req.body.instituicao = instituicao;
    next();
};
module.exports = {
    update
};