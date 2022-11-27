const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dataBase = require('../connection');
const Usuario = require('../models/Usuario');
const Instituicao = require('../models/Instituicao');

const create= async (req, res) => {
    await dataBase.sync();
    const {nome, email, senha, imagem, nivel} = req.body;

    //criar hash para a senha
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);
    //criar o usuario com os dados recebidos
    await Usuario.create({
        nome: nome,
        email: email,
        senha: senhaHash,
        imagem: imagem,
        nivel: nivel,
        status: true
    }).then((result) => {
        return res.status(200).json({msg: 'Usuário cadastrado'});
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+erro});
    });
};

const read = async (req, res) => {
    await dataBase.sync();
    const usuario = Usuario.findByPk();
    return res.status(200).json('Listar todos os usuarios.'+usuario)
};

const readVarios = async (_req, res) => {
    await dataBase.sync();
    const usuarios = await Usuario.findAll();
    console.log(usuarios)
    return res.status(200).json('Listar todos os usuarios.'+usuarios.dataValues)
};

const update = async (req, res) => {
    await dataBase.sync();
    const usuario = Usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuario)
};

const deleteUsuario = async (req, res) => {
    await dataBase.sync();
    Usuario.findAll();
    return res.status(200).json({erro: false, msg: 'Todos os usuários foram deletados'})
};

const login = async (req, res) => {
    try {
        await dataBase.sync();
        const usuario = req.body.usuario;
        const {usuario_id, nome, email} = usuario;
        const secret = process.env.SECRET;
        const token = jwt.sign({usuario_id: usuario_id}, secret,);

        const instituicao = await Instituicao.findOne({where : {instituicao_id: 1}});

        res.status(200).json({
            erro: false,
            msg: 'Usuário autenticado com sucesso',
            usuario: {usuario_id, nome, email, token},
            instituicao
        });
    } catch (_error) {
        console.log(erro);
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
};

module.exports = {
    create,
    read,
    readVarios,
    update,
    deleteUsuario,
    login
};