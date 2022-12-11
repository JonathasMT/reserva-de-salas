const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');
moment.locale('pt-br');

const baseDados = require('../connection');
const Usuario = require('../models/Usuario');

const create= async (req, res) => {
    await baseDados.sync();
    const {usuario_nome, email, nivel, senha, imagem} = req.body;

    //criar hash para a senha
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);
    //criar o usuario com os dados recebidos
    await Usuario.create({
        usuario_nome: usuario_nome,
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
    await baseDados.sync();
    const usuario = Usuario.findByPk();
    return res.status(200).json('Listar todos os usuarios.'+usuario)
};

const readPerfil = async (req, res) => {
    try {
        const {usuario_id} = req.usuario
        await baseDados.sync();
        const usuario = await Usuario.findOne({where: {usuario_id: usuario_id}});
        if (!usuario) {
            return res.status(200).json({erro: true, msg: 'Usuario não encontrado!'});
        }else {
            const {usuario_nome, email} = usuario;
            const token = req.token;
            return res.status(200).json({erro: false, msg: 'Sucesso', usuario: {usuario_id, usuario_nome, email, token}});
        };

    } catch (error) {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+error});
    };

};

const readVarios = async (_req, res) => {
    await baseDados.sync();
    const usuarios = await Usuario.findAll();
    return res.status(200).json({erro: false, msg: 'Sucesso', usuarios: usuarios})
};

const updatePerfil = async (req, res) => {
    try {
        const {usuario_id, usuario_nome, email, alterar_senha, nova_senha} = req.body;
        const usuario = req.usuario;
        const token = req.token;
        usuario.usuario_nome = usuario_nome;
        usuario.email = email;
        if(alterar_senha) {
            //criar hash para a senha
            const salt = await bcrypt.genSalt(12);
            const senhaHash = await bcrypt.hash(nova_senha, salt);
            
            usuario.senha = senhaHash;
        };
        //tenta salvar as modificações
        await usuario.save()
        .then((_result) => {
            return res.status(200).json({erro: false, msg: 'Usuário atualizado.', usuario: {usuario_id, usuario_nome, email, token}})
        }).catch((_err) => {
            return res.status(200).json({erro: true, msg: 'Erro ao atualizar!'})
        });
    } catch (error) {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'+error});
    };
};

const deleteUsuario = async (req, res) => {
    await baseDados.sync();
    Usuario.findAll();
    return res.status(200).json({erro: false, msg: 'Todos os usuários foram deletados'})
};

const login = async (req, res) => {
    try {
        await baseDados.sync();
        const {usuario, instituicao} = req.body;
        const {usuario_id, usuario_nome, email} = usuario;
        const secret = process.env.SECRET;
        const token = jwt.sign({usuario_id: usuario_id}, secret,);
        //seta o tempo atual para ultimo_login
        const agora = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        usuario.ultimo_login = agora;
        //tenta salvar as modificações
        await usuario.save({silent: true})
        .then((_result) => {
            return res.status(200).json({
            erro: false,
            msg: 'Usuário autenticado com sucesso',
            usuario: {usuario_id, usuario_nome, email, token},
            instituicao: instituicao
        });
        }).catch((_err) => {
            return res.status(200).json({erro: true, msg: 'Erro ao fazer login!'})
        });        
    } catch (_error) {
        console.log(erro);
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
};

module.exports = {
    create,
    read,
    readPerfil,
    readVarios,
    updatePerfil,
    deleteUsuario,
    login
};