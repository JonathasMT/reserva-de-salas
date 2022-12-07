const baseDados = require("../connection");
const Sala = require("../models/Sala");

const create = async (req, res, next) => {
    const {grupo_id, sala_nome, capacidade} = req.body;
    console.log('grupo_id');
    console.log(grupo_id);
    console.log(Number.isInteger(grupo_id));

    //vefifica se o id do grupo não está vazio
    if (!grupo_id) {
        return res.status(200).json({erro: true, msg: 'O "Grupo da sala" deve ser informado!'});
    };
    //vefifica se o id do grupo é um número
    if (!Number.isInteger(grupo_id)) {
        return res.status(200).json({erro: true, msg: 'O campo "ID" do grupo de sala deve ser um número inteiro!'});
    };
    //vefifica se o nome da sala não está vazio
    if (!sala_nome) {
        return res.status(200).json({erro: true, msg: 'O campo "Titulo" deve ser preeenchido!'});
    };
    //vefifica se o nome da sala já existe
    
    //cria tabela caso não exista 
    await baseDados.sync();
    //verifica se o nome informado já existe
    const existeTitulo = await Sala.findOne({where : {sala_nome: sala_nome}});
    if (existeTitulo) {
        return res.status(200).json({erro: true, msg: 'O nome "' + sala_nome + '" já existe!'});
    };

    if (capacidade) {
        if (Number.isInteger(capacidade)) {
            return res.status(200).json({erro: true, msg: 'O campo "Capacidade" deve ser um número inteiro!'});
        };
    };
    next();

};

module.exports = {
    create
};