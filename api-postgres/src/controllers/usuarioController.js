const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dataBase = require('../db');
const Usuario = require('../models/Usuario');

const createUsuario = async (req, res) => {
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
    }).then((resultado) => {
        return res.status(200).json({msg: 'Usuário cadastrado'});
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+erro});
    });
};

const createPrimeiroUsuario = async (req, res) => {
    await dataBase.sync();
    const {nome, email, senha, imagem} = req.body;

    //criar hash para a senha
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);
    //criar o usuario com os dados recebidos
    await Usuario.create({
        nome: nome,
        email: email,
        senha: senhaHash,
        imagem: imagem,
        nivel: 2,
        status: true
    }).then((resultado) => {
        return res.status(200).json('Usuario cadastrado');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+erro});
    });
};

const readUsuario = async (req, res) => {
    await dataBase.sync();
    const usuario = Usuario.findByPk();
    return res.status(200).json('Listar todos os usuarios.'+usuario)
};

const readVariosUsuarios = async (_req, res) => {
    await dataBase.sync();
    const usuarios = await Usuario.findAll();
    console.log(usuarios)
    return res.status(200).json('Listar todos os usuarios.'+usuarios.dataValues)
};

const updateUsuario = async (req, res) => {
    await dataBase.sync();
    const usuario = Usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuario)
};

const deleteUsuario = async (req, res) => {
    await dataBase.sync();
    const usuario = Usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuario)
};

const login = async (req, res) => {
    await dataBase.sync();
    const {email} = req.body;

    const usuario = await Usuario.findOne({where : {email: email}});

    try {
        const secret = process.env.SECRET;
        const token = jwt.sign({usuario_id: usuario.usuario_id}, secret,);
        const {usuario_id, nome, email} = usuario;

        res.status(200).json({msg: 'Usuário autenticado com sucesso',  usuario_id, nome, email, token});
    } catch (erro) {
        console.log(erro);
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
};

const tamanhoBancoDeDados = async (req, res) => {
    await dataBase.sync();
    const {count} = await Usuario.findAndCountAll();

    console.log(req.header.authorization);

    if(count>0) {
        //o banco de dados já possui registros
        return res.status(200).json({msg: 'O banco de dados já possui cadastros', vazio: false});
    } else {
        //O banco de dados está vazio
        res.status(200).json({msg: 'O banco de dados está vazio', vazio: true});
    };
    
};

module.exports = {
    createUsuario,
    createPrimeiroUsuario,
    readUsuario,
    readVariosUsuarios,
    updateUsuario,
    deleteUsuario,
    login,
    tamanhoBancoDeDados
};