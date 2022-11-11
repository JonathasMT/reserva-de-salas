const validarNome = (req, res, next) => {
    const { body } = req;

    if (body.nome === undefined) {
        return res.status(400).json({ msg: 'O campo Nome é obritatório!' });
    };
    if (body.nome === '') {
        return res.status(400).json({ msg: 'O campo Nome deve ser preeenchido!' });
    };
    next();
};

const validarEmail = (req, res, next) => {
    const { body } = req;

    if (body.email === undefined) {
        return res.status(400).json({ msg: 'O campo Email é obritatório!' });
    };
    if (body.email === '') {
        return res.status(400).json({ msg: 'O campo Email deve ser preeenchido!' });
    };
    next();
};

const validarSenha = (req, res, next) => {
    const { body } = req;

    if (body.senha === undefined) {
        return res.status(400).json({ msg: 'O campo Senha é obritatório!' });
    };
    if (body.senha === '') {
        return res.status(400).json({ msg: 'O campo Senha deve ser preeenchido!' });
    };
    next();
};

const validarNivel = (req, res, next) => {
    const { body } = req;

    if (body.nivel === undefined) {
        return res.status(400).json({ msg: 'O campo Nivel é obritatório!' });
    };
    if (body.nivel === '') {
        return res.status(400).json({ msg: 'O campo Nivel deve ser preeenchido!' });
    };
    next();
};

const validarStatus= (req, res, next) => {
    const { body } = req;

    if (body.status === undefined) {
        return res.status(400).json({ msg: 'O campo Status é obritatório!' });
    };
    if (body.status === '') {
        return res.status(400).json({ msg: 'O campo Status deve ser preeenchido!' });
    };
    next();
};

  
module.exports = {
    validarNome,
    validarEmail,
    validarSenha,
    validarNivel,
    validarStatus
};