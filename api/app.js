//imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const porta = 3001;

const app = express();
app.use(cors());

//Configurar JSON response
app.use(express.json());

//Modelos
const Usuario = require('./models/Usuario');

//Rota publica
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a minha API'})
});

//Rota privada
app.get('/usuario/:id', verificaToken, async (req, res) => {
    const  id = req.params.id;

    //Verificar se o usuario existe
    const usuario = await Usuario.findById(id, '-senha');
    if(!usuario) {
        return res.status(404).json({msg: 'O usuário não foi encontrado!'});
    }
    res.status(200).json({usuario});
});
function verificaToken(req, res, next) {
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({msg: 'Acesso negado!'});
    };
    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret);
        
        next();
    } catch (erro) {
        console.log(erro);
        res.status(400).json({msg: 'Token inválido!'});
    };
};


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
        return res.status(422).json({msg: 'O senha é obrigatório!'})
    };
    if(!confirmaSenha) {
        return res.status(422).json({msg: 'O confimar senha é obrigatório!'})
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

//Rota de Login de usuario
app.post('/login', async (req, res) => {
    const {email, senha} = req.body;

    //validações
    if(!email) {
        return res.status(422).json({msg: 'O email é obrigatório!'})
    };
    if(!senha) {
        return res.status(422).json({msg: 'A senha é obrigatório!'})
    };

    //Verificar se o usuario existe e se a senha esta correta
    const usuario = await Usuario.findOne({email: email})
    if(!usuario) {
        return res.status(422).json({msg: 'O email ' + email + ' não foi encontrado!'});
    };
    const verificaSenha = await bcrypt.compare(senha, usuario.senha);
    if(!verificaSenha) {
        return res.status(422).json({msg: 'Senha incorreta!'});
    };

    //Logar o  usuario;
    try {
        const secret = process.env.SECRET;
        const token = jwt.sign({id: usuario._id}, secret,);
        const usuarioId = usuario.id;
        
        await usuario.save();
        res.status(200).json({msg: 'Usuário autenticado com sucesso', token, usuarioId});
    } catch (erro) {
        console.log(erro);
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
});

//Credenciais
const bdusuario = process.env.DB_USER;
const dbsenha = process.env.DB_PASS;

// mongoose.connect('mongodb+srv://' + bdusuario + ':' + dbsenha + '@cluster0.gbfhz.mongodb.net/?retryWrites=true&w=majority').then(
//     () => {
//         app.listen(3000);
//         console.log('Conectado ao Banco de Dados!');
//     }
// ).catch((erro) => console.log(erro));

mongoose.connect('mongodb://localhost:27017/reserva').then(
    () => {
        app.listen(porta);
        console.log('Conectado ao bando de dados.');
        console.log('Rodando na porta ' + porta);
    }
).catch((erro) => console.log(erro));