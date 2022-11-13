const validarRepeteTipoId = async (req, res, next) => {
    const {repeteTipoId} = req.body;

    if (!repeteTipoId) {
        return res.status(400).json({msg: 'O Tipo de Repetição deve ser informado!'});
    };
    console.log(Number.isInteger(repeteTipoId));
    if (Number.isInteger(repeteTipoId)) {
        return res.status(400).json({msg: 'O campo Tipo de Repetição deve ser um número inteiro!'});
    };
    next();
};

const validarQuantidade = async (req, res, next) => {
    const {quantidade} = req.body;

    if (!quantidade) {
        return res.status(400).json({msg: 'A Quantidade de repetições deve ser informada!'});
    };
    if (Number.isInteger(quantidade)) {
        return res.status(400).json({msg: 'O campo Quantidade de repetições deve ser um número inteiro!'});
    };
    next();
};

module.exports = {
    validarRepeteTipoId,
    validarQuantidade
};