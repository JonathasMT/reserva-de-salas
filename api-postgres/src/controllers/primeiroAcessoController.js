const bcrypt = require('bcrypt');
const dataBase = require('../connection');

const Instituicao = require('../models/Instituicao');
const Usuario = require('../models/Usuario');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! '

const tamanhoBd= async (_req, res) => {
    try {
        await dataBase.sync();
        
        const i = await Instituicao.findAndCountAll();
        const u = await Usuario.findAndCountAll();

        const instituicao = i.count;
        const usuario = u.count;

        console.log('I > ' + instituicao);
        console.log('U > ' + usuario);

        await dataBase.sync();

        if(instituicao > 0 || usuario > 0) {
        //o banco de dados já possui registros
            return res.status(200).json({erro: false, msg: 'Não autorizado. O banco de dados já possui cadastros.', vazio: false});
        }else {
            //O banco de dados está vazio
            return res.status(200).json({erro: false, msg: 'O banco de dados está vazio', vazio: true});
        };

    } catch (e) {
        return res.status(500).json({erro: true, msg: msgErro});
        
    };
};

const cadastro = async (req, res) => {
    try {
        var instituicao;
        var usuario;
    
        await dataBase.sync();
        req.body.nivel = 2;
        const {
            nomeInstituicao,
            logo,
            imagem,
            nome,
            email,
            nivel,
            senha
        } = req.body;
    
        //-----------------------------------------------------------------------------------------------------
        //criar instituição com os dados recebidos
        await Instituicao.create({
            nome_instituicao: nomeInstituicao,
            logo: logo
        }).then((resultado) => {
            instituicao = true;
            console.log('Instituição cadastrada');
        }).catch((erro) => {
            return res.status(500).json({msg: msgErro + erro});
        });
        //-----------------------------------------------------------------------------------------------------
        //criar hash para a senha do usuario
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
            usuario = true;
            console.log('Usuário cadastrado');
        }).catch((erro) => {
            return res.status(500).json({msg: msgErro});
        });
        //-----------------------------------------------------------------------------------------------------
        console.log(instituicao);
        console.log(usuario);
        if(instituicao && usuario) {
            return res.status(200).json({ok: true, msg: 'Instituição e usuario cadastrado no primeiro acesso'});
        }else {
            return res.status(500).json({ok: false, msg: msgErro});
        };
    } catch (erro) {
        return res.status(500).json({ok: false, msg: msgErro});
    };
};

module.exports = {
    tamanhoBd,
    cadastro
};

