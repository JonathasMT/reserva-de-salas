const dataBase = require('../models/db');
const Instituicao = require('../models/Instituicao');

 const createInstituicao = async (req, res, next) => {
    await dataBase.sync();
    const {nome_instituicao, logo} = req.body;

    //criar instituição com os dados recebidos
    await Instituicao.create({
        nome_instituicao: nome_instituicao,
        logo: logo
    }).then((resultado) => {
        // return res.status(200).json({msg: 'Instituição cadastrada'});
        next();
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+erro});
    });
    
};

const readInstituicao = async (req, res) => {
    await dataBase.sync();
    const {nome_instituicao, logo} = req.body;

    //criar o usuario com os dados recebidos
    await Instituicao.create({
        nome_instituicao: nome_instituicao,
        logo: logo
    }).then((resultado) => {
        return res.status(200).json('Instituição cadastrada');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+erro});
    });
};


module.exports = {
    createInstituicao,
    readInstituicao
};