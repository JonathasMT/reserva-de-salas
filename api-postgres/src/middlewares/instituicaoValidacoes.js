const update = async (req, res, next) => {
    const {instituicaoNome} = req.body;
    //-----------------------------------------------------------------------------------------------------
    //validações instituição
    if (!instituicaoNome) {
        return res.status(400).json({msg: 'O campo "Nome da intituição" deve ser preeenchido!' });
    };
    next();
};
module.exports = {
    update
};