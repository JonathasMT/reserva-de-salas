const dataBase = require('../models/db');
const Instituicao = require('../models/Instituicao');

const validarTamanhoBancoDeDados = async (req, res, next) => {
    await dataBase.sync();
    const {count} = await Instituicao.findAndCountAll();

    if(count>0) {
        //o banco de dados já possui registros
        return res.status(401).json({msg: 'Não autorizado. Este não é o primeiro acesso.', vazio: false});
    };
    next();
    
};

const validarNomeInstituicao = async (req, res, next) => {
    const {nome_instituicao} = req.body;

    if (!nome_instituicao) {
        return res.status(400).json({msg: 'O campo "Nome" deve ser preeenchido!' });
    };
    next();
};

module.exports = {
    validarTamanhoBancoDeDados,
    validarNomeInstituicao
};