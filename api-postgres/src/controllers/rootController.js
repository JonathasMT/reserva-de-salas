const dataBase = require('../models/db');
const Usuario = require('../models/Usuario');

const readBancoDeDados = async (req, res) => {
    await dataBase.sync();
    const usuario = await Usuario.findByPk(1);

    console.log(usuario);

    if(usuario) {
        //o banco de dados já possui registros
        return res.status(200).json({msg: '1'});
    } else {
        //O banco de dados está vazio
        return res.status(200).json({msg: '0'});
    }

    
};

module.exports = {
    readBancoDeDados
};