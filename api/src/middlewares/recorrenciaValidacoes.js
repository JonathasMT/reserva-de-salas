const validarRecorrenciaTipoId = async (req, res, next) => {
    const {recorrencia_tipo_id} = req.body;

    if (!recorrencia_tipo_id) {
        return res.status(400).json({msg: 'O Tipo de Repetição deve ser informado!'});
    };
    console.log(!Number.isInteger(recorrencia_tipo_id));
    if (!Number.isInteger(recorrencia_tipo_id)) {
        return res.status(400).json({msg: 'O campo Tipo de Repetição deve ser um número inteiro!'});
    };
    next();
};

const validarQuantidade = async (req, res, next) => {
    const {quantidade} = req.body;

    if (!quantidade) {
        return res.status(400).json({msg: 'A Quantidade de repetições deve ser informada!'});
    };
    if (!Number.isInteger(quantidade)) {
        return res.status(400).json({msg: 'O campo Quantidade de repetições deve ser um número inteiro!'});
    };
    next();
};

module.exports = {
    validarRecorrenciaTipoId,
    validarQuantidade
};