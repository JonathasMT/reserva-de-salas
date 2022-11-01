//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 3001;

const app = express();

//Configurar JSON response
app.use(express.json());

//Models
const User = require('./models/User');

//Rota publica
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a minha API'})
});

//Rota privada
app.get('/user/:id', checkToken, async (req, res) => {
    const  id = req.params.id;

    //Verificar se o usuario existe
    const user = await User.findById(id, '-password');
    if(!user) {
        return res.status(404).json({msg: 'O usuário não foi encontrado!'});
    }
    res.status(200).json({user});
});
function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({msg: 'Acesso negado!'});
    };
    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret);
        
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'Token inválido!'});
    };
};


//Rota de criação de usuario
app.post('/auth/register', async (req, res) => {
    const {name, email, password, confirmPassword} = req.body;
    //validações
    if(!name) {
        return res.status(422).json({msg: 'O nome é obrigatório!'})
    }
    if(!email) {
        return res.status(422).json({msg: 'O email é obrigatório!'})
    }
    if(!password) {
        return res.status(422).json({msg: 'O senha é obrigatório!'})
    }
    if(!confirmPassword) {
        return res.status(422).json({msg: 'O confimar senha é obrigatório!'})
    }
    if(password !== confirmPassword) {
        return res.status(422).json({msg: 'As senhas não conferem!'})
    }
    //Checar se o usuario existe
    const userExists = await User.findOne({email: email})
    if(userExists) {
        return res.status(422).json({msg: 'O email ' + email + ' já existe!'});
    };

    //Criar senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Criar o usuario de fato
    const user = new User({
        name,
        email,
        password: passwordHash,
    });
    try {
        await user.save();
        res.status(201).json({msg: 'Usuário cadastrado com sucesso'});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
});

//Rota de Login de usuario
app.post('/auth/login', async (req, res) => {
    const {email, password} = req.body;

    //validações
    if(!email) {
        return res.status(422).json({msg: 'O email é obrigatório!'})
    }
    if(!password) {
        return res.status(422).json({msg: 'O senha é obrigatório!'})
    }

    //Verificar se o usuario existe e se a senha esta correta
    const user = await User.findOne({email: email})
    if(!user) {
        return res.status(404).json({msg: 'O email ' + email + ' não foi encontrado!'});
    };
    const checkPassord = await bcrypt.compare(password, user.password);
    if(!checkPassord) {
        return res.status(422).json({msg: 'Senha incorreta!'});
    };

    //Logar o  usuario;
    try {
        const secret = process.env.SECRET;
        const token = jwt.sign({id: user._id}, secret,);

        await user.save();
        res.status(200).json({msg: 'Usuário autenticado com sucesso', token});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };
});

//Credenciais
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;

// mongoose.connect('mongodb+srv://' + dbuser + ':' + dbpass + '@cluster0.gbfhz.mongodb.net/?retryWrites=true&w=majority').then(
//     () => {
//         app.listen(3000);
//         console.log('Conectado ao Banco de Dados!');
//     }
// ).catch((error) => console.log(error));

mongoose.connect('mongodb://localhost:27017/reserva').then(
    () => {
        app.listen(port);
        console.log('Conectado ao bando de dados.');
        console.log('Rodando na porta ' + port);
    }
).catch((error) => console.log(error));