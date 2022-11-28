const update = async (req, res, next) => {
    const {instituicaoNome} = req.body;
    //-----------------------------------------------------------------------------------------------------
    //validações instituição
    if (!instituicaoNome) {
        return res.status(200).json({erro:true, msg: 'O campo "Nome da intituição" deve ser preeenchido!'});
    };
    if (instituicaoNome.length < 2) {
        return res.status(200).json({erro:true, msg: 'O campo "Nome da intituição" deve possuir no mínimo 2 caracteres!'});
    };
    next();
};
module.exports = {
    update
};