const bcrypt = require('bcrypt');
const baseDados = require('../connection');

const Instituicao = require('../models/Instituicao');
const Usuario = require('../models/Usuario');
const RecorrenciaTipo = require('../models/RecorrenciaTipo');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const tamanhoBd= async (_req, res) => {
    try {
        await baseDados.sync();
        
        const i = await Instituicao.findAndCountAll();
        const u = await Usuario.findAndCountAll();

        const instituicao = i.count;
        const usuario = u.count;

        console.log('I > ' + instituicao);
        console.log('U > ' + usuario);

        await baseDados.sync();

        if(instituicao > 0 || usuario > 0) {
        //o banco de dados já possui registros
            return res.status(200).json({erro: true, msg: 'Não autorizado. O banco de dados já possui cadastros.'});
        }else {
            //O banco de dados está vazio
            return res.status(200).json({erro: false, msg: 'O banco de dados está vazio'});
        };

    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro});
        
    };
};

const cadastro = async (req, res) => {
    try {
        var instituicao;
        var usuario;
        var recorrenciaTipos = 0;
    
        await baseDados.sync();
        req.body.nivel = 2;
        const {
            instituicao_nome,
            logo,
            imagem,
            usuario_nome,
            email,
            nivel,
            senha
        } = req.body;
    
        //-----------------------------------------------------------------------------------------------------
        //criar instituição com os dados recebidos
        await Instituicao.create({
            instituicao_nome: instituicao_nome,
            logo: logo
        }).then((result) => {
            instituicao = true;
            console.log('Instituição cadastrada');
        }).catch((erro) => {
            return res.status(200).json({erro: true, msg: 'Erro ao cadastrar instituição!'});
        });
        //-----------------------------------------------------------------------------------------------------
        //criar usuario com os dados recebidos
        //criar hash para a senha do usuario
        const salt = await bcrypt.genSalt(12);
        const senhaHash = await bcrypt.hash(senha, salt);
        //criar o usuario

        await Usuario.create({
            usuario_nome: usuario_nome,
            email: email,
            senha: senhaHash,
            imagem: imagem,
            nivel: nivel,
            status: true
        }).then((result) => {
            usuario = true;
            console.log('Usuário cadastrado');
        }).catch((erro) => {
            return res.status(200).json({erro: true, msg: 'Erro ao cadastrar usuário!'});
        });
        //-----------------------------------------------------------------------------------------------------
        //criar tipos de recoorencia pré-definidos
        //criar hash para a senha do usuario
        const tipos = ['Diariamente', 'Semanalmente', 'Mensalmente', 'Anualmente'];
        for (let i = 0; i < tipos.length; i++) {
            await RecorrenciaTipo.create({
                recorrencia_tipo_nome: tipos[i],
            }).then((result) => {
                recorrenciaTipos++;
                console.log('Recorrencia tipo: '+ tipos[i] + ' cadastrada');
            }).catch((erro) => {
                return res.status(200).json({erro: true, msg: 'Erro ao cadastrar recorrencia tipo ' + tipos[i]});
            });
        };

        //-----------------------------------------------------------------------------------------------------
        console.log(instituicao);
        console.log(usuario);
        console.log(recorrenciaTipos);
        if(instituicao && usuario && recorrenciaTipos === 4) {
            return res.status(200).json({erro: false, msg: 'Instituição e usuario cadastrados no primeiro acesso.'});
        }else {
            return res.status(200).json({erro: true, msg: 'Erro ao cadastrar!'});
        };
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro});
    };
};

module.exports = {
    tamanhoBd,
    cadastro
};

