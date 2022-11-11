const usuario = require('../models/usuario');
const dataBase = require('../models/db');


// router.post('/cadastro', usuarioControler.createUsuario);
// router.get('/usuario', usuarioControler.readUsuario);
// router.get('/usuarios', usuarioControler.readUsuarios);
// router.put('/usuario/:id', usuarioControler.updateUsuario);
// router.delete('/usuario/:id', usuarioControler.deleteUsuario);

const createUsuario = async (req, res) => {
    await dataBase.sync();
    const { nome, email, senha, nivel } = req.body;
    const usuarios = await usuario.create({
        nome: nome,
        email: email,
        senha: senha,
        nivel: nivel,
        status: true
    });
    return res.status(200).json('Usuario cadastrado')
};

const readUsuario = async (req, res) => {
    await dataBase.sync();
    const usuarios = usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuarios)
};
const readUsuarios = async (_req, res) => {
    await dataBase.sync();
    const usuarios = await usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuarios)
};

const updateUsuario = async (req, res) => {
    await dataBase.sync();
    const usuarios = usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuarios)
};

const deleteUsuario = async (req, res) => {
    await dataBase.sync();
    const usuarios = usuario.findAll();
    return res.status(200).json('Listar todos os usuarios.'+usuarios)
};

module.exports = {
    createUsuario,
    readUsuario,
    readUsuarios,
    updateUsuario,
    deleteUsuario
};