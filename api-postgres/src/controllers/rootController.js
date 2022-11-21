const dataBase = require('../models/db');
const Usuario = require('../models/Usuario');

const tamanhoBD = async (req, res) => {
    await dataBase.sync();
    const {count} = await Usuario.findAndCountAll();

    console.log(count);

    if(count>0) {
        //o banco de dados já possui registros
        return res.status(200).json({msg: '1'});
    } else {
        //O banco de dados está vazio
        return res.status(200).json({msg: '0'});
    };
};

module.exports = {
    tamanhoBD
};