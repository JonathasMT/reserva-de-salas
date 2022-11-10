const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const porta = 3001

const app =express();

//Modelos
const Usuario = require('./models/Usuario');
const  Reserva = require('./models/Reserva');

//rota raiz/home
app.get('/', async (req, res) => {
    return res.json({
        msg: "Listar usuários"
    });
});

//Rota de criação de usuario
app.post('/cadastro', async (req, res) => {
    const {nome, email, senha, confirmaSenha} = req.body;
    //validações
    if(!nome) {
        return res.status(422).json({msg: 'O nome é obrigatório!'})
    };
    if(!email) {
        return res.status(422).json({msg: 'O email é obrigatório!'})
    };
    if(!senha) {
        return res.status(422).json({msg: 'A senha é obrigatório!'})
    };
    if(!confirmaSenha) {
        return res.status(422).json({msg: 'É obrigatório confirmar a senha!'})
    };
    if(senha !== confirmaSenha) {
        return res.status(422).json({msg: 'As senhas não conferem!'})
    };
    //Checar se o usuario existe
    const existeUsuario = await Usuario.findOne({email: email})
    if(existeUsuario) {
        return res.status(422).json({msg: 'O email ' + email + ' já existe!'});
    };

    //Criar senha
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    // Criar o usuario de fato
    const usuario = new Usuario({
        nome,
        email,
        senha: senhaHash,
    });
    try {
        await usuario.save();
        res.status(201).json({msg: 'Usuário cadastrado com sucesso'});
    } catch (erro) {
        console.log(erro);
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
});

app.listen(porta, () => {
    console.log('Servidor iniciado na porta 3001');
});