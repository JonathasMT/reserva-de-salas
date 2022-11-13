const validarUsuarioId = async (req, res, next) => {
    const {usuarioId} = req.body;

    if (!usuarioId) {
        return res.status(400).json({msg: 'O Usuário deve ser informado!'});
    };
    if (Number.isInteger(usuarioId)) {
        return res.status(400).json({msg: 'O campo Usuário deve ser um número inteiro!'});
    };
    next();
};

const validarSalaId = async (req, res, next) => {
    const {salaId} = req.body;

    if (!salaId) {
        return res.status(400).json({msg: 'A Sala deve ser informada!'});
    };
    if (Number.isInteger(salaId)) {
        return res.status(400).json({msg: 'O campo Sala deve ser um número inteiro!'});
    };
    next();
};

const validarCategoriaId = async (req, res, next) => {
    const {categoriaId} = req.body;

    if (!categoriaId) {
        return res.status(400).json({msg: 'A Categoria da reserva deve ser informada!'});
    };
    if (Number.isInteger(categoriaId)) {
        return res.status(400).json({msg: 'O campo Categoria da reserva deve ser um número inteiro!'});
    };
    next();
};

const validarRepeteId = async (req, res, next) => {
    const {repeteId} = req.body;

    if (repeteId) {
        if (Number.isInteger(repeteId)) {
            return res.status(400).json({msg: 'O campo Repetir deve ser um número inteiro!'});
        };
    };
    next();
};

const validarTitulo = async (req, res, next) => {
    const {titulo} = req.body;

    if (!titulo) {
        return res.status(400).json({msg: 'O campo Titulo deve ser preeenchido!'});
    };
    next();
};

const validarData = async (req, res, next) => {
    const {data} = req.body;

    if (!data) {
        return res.status(400).json({msg: 'O campo Data deve ser preechido!'});
    };
    if (!dataValida(data)) {
        return res.status(400).json({msg: 'O campo Data está em um formato invalido!'});
    }
    next();
};

const validarHoraInicio = async (req, res, next) => {
    const {horaInicio} = req.body;

    if (!horaInicio) {
        return res.status(400).json({msg: 'O campo Hora inicial deve ser preechido!'});
    };
    if (!dataValida(horaInicio)) {
        return res.status(400).json({msg: 'O campo Hora inicial está em um formato invalido!'});
    }
    next();
};

const validarHoraFim = async (req, res, next) => {
    const {horaFim} = req.body;

    if (!horaFim) {
        return res.status(400).json({msg: 'O campo Hora final deve ser preechido!'});
    };
    if (!dataValida(horaFim)) {
        return res.status(400).json({msg: 'O campo Hora final está em um formato invalido!'});
    }
    next();
};

function dataValida(dataHora) {
    return date instanceof Date && !isNaN(dataHora);
};

module.exports = {
    validarUsuarioId,
    validarSalaId,
    validarCategoriaId,
    validarRepeteId,
    validarTitulo,
    validarData,
    validarHoraInicio,
    validarHoraFim
};