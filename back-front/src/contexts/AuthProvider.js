import {createContext, useEffect, useState} from 'react';
import api from '../services/api'


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    console.log('Passou no arquivo auth.js');
    const [usuario, setUsuario] = useState(null);
    const [instituicao, setInstituicao] = useState(null);


    useEffect(() => {
        console.log('Passou no arquivo auth.js >> useEffect');
        const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
        console.log(usuarioAutenticado);
        if (usuarioAutenticado) {
            setUsuario(usuarioAutenticado);
        };
        const instituicao = localStorage.getItem('instituicao');
        if (instituicao) {
            setInstituicao(instituicao);
        };
    }, [usuario]);

    async function login (email, senha) {
        var resposta;
        const dadosLogin = {email:email,senha:senha};
        await api.post('/login', dadosLogin)
        .then((resultado) => {
            console.log(resultado.data.usuario);
            localStorage.setItem('usuarioAutenticado', JSON.stringify(resultado.data.usuario));
            localStorage.setItem('instituicao', JSON.stringify(resultado.data.instituicao));
            setUsuario(localStorage.getItem('usuarioAutenticado'));
            resposta = resultado.data;
        }).catch((erro) => {
            console.log('ERRO >>'+erro)
            resposta = erro.response.data;
        });
        return resposta;
    };

    // const cadastrarUsuario = (email, senha) => {
    //     const armazenamentoUsuario = JSON.parse(localStorage.getItem('users_bd'));
    //     const temUsuario = armazenamentoUsuario?.filter((usuario) => usuario.email === email);
    //     if (temUsuario?.length) {
    //     return 'Já tem uma conta com esse E-mail';
    //     };
    //     let novoUsuario;
    //     if (armazenamentoUsuario) {
    //     novoUsuario = [...armazenamentoUsuario, {email, senha}];
    //     } else {
    //     novoUsuario = [{email, senha}];
    //     };
    //     localStorage.setItem('users_bd', JSON.stringify(novoUsuario));
    //     return;
    // };

    const sair = () => {
        setUsuario(null);
        localStorage.clear();
    };

    async function tamanhoBd() {
        var retorno;
        await api.get('/primeiroacesso')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function primeiroAcesso (instituicaoNome, logo, img, nome, email, senha, confirmaSenha) {
        var retorno;
        
        const dadosPrimeiroAcesso = {
            instituicaoNome: instituicaoNome,
            logo: logo,
            imagem: img,
            nome: nome,
            email: email,
            senha: senha,
            confirmaSenha: confirmaSenha
        };
        await api.post('/primeiroacesso', dadosPrimeiroAcesso)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO = ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarInstituicao() {
        var retorno;
        await api.get('/listarinstituicao')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            const {nome_instituicao} = resultado.data.instituicao;
            console.log(nome_instituicao);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function atualizarInstituicao (instituicaoNome, logo) {
        var retorno;
        const {token} = JSON.parse(usuario);
        console.log('token ');
        console.log(token);
        const dadosInstituicao = {
            instituicaoNome: instituicaoNome,
            logo: logo,
        };
        await api.put('/atualizarinstituicao', dadosInstituicao)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            //atualiza a instituição salva no localStorage
            localStorage.setItem('instituicao', JSON.stringify(resultado.data.instituicao));
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO = ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarGrupos() {
        var retorno;
        await api.get('/listargrupos')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function cadastrarGrupo(titulo, descricao, diasSemana, horaInicio, horaFim, tempoAntecedencia) {
        var retorno;
        const dadosGrupo = {
            titulo: titulo,
            descricao,
            diasSemana,
            horaInicio,
            horaFim,
            tempoAntecedencia
        };
        await api.post('/novogrupo', dadosGrupo)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO = ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };


    return (
        <AuthContext.Provider
            value={{
                usuario: usuario,
                instituicao: instituicao,
                setUsuario,
                login,
                // cadastrarUsuario,
                sair,
                tamanhoBd,
                primeiroAcesso,
                listarInstituicao,
                atualizarInstituicao,
                listarGrupos
            }}
        >
        {children}
        </AuthContext.Provider>
    );
};