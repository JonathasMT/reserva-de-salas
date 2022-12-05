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
        console.log('USUARIO AUTENTICADO >');
        console.log(usuarioAutenticado);
        if (usuarioAutenticado) {
            setUsuario(usuarioAutenticado);
        };
        const i = localStorage.getItem('instituicao');
        if (i) {
            setInstituicao(i);
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

    async function primeiroAcesso (dados) {
        var retorno;
        await api.post('/primeiroacesso', dados)
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
            const {instituicao_nome} = resultado.data.instituicao;
            console.log(instituicao_nome);
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
            instituicao_nome: instituicaoNome,
            logo: logo,
        };
        await api.put('/atualizarinstituicao', dadosInstituicao)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            //atualiza a instituição salva no localStorage
            if(!resultado.data.erro){
                localStorage.setItem('instituicao', JSON.stringify(resultado.data.instituicao));
            };
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

    async function novoGrupo(dados) {
        var retorno;
        console.log(dados);
        await api.post('/novogrupo', dados)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO = ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function novaSala(dados) {
        var retorno;
        console.log(dados);
        await api.post('/novasala', dados)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO = ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarSalas() {
        var retorno;
        await api.get('/listarsalas')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarCategorias() {
        var retorno;
        await api.get('/listarcategorias')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function novaReserva(dados) {
        console.log(dados);
        var retorno;
        await api.post('/novareserva', dados)
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO = ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarReservas() {
        var retorno;
        await api.get('/listarreservas')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarUsuarios() {
        var retorno;
        await api.get('/listarusuarios')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarMinhasReservas(id) {
        var retorno;
        await api.get('/listarminhasreservas')
        .then((resultado) => {
            console.log('MSG = ' + resultado.data.msg);
            retorno = resultado.data;
        }).catch((erro) => {
            console.log('ERRO? ' + erro.response.data.msg);
            retorno = erro.response.data;
        });
        return retorno;
    };

    return (
        <AuthContext.Provider
            value={{
                //states
                usuario: usuario,
                instituicao: instituicao,
                //funções
                setUsuario,
                login,
                sair,
                tamanhoBd,
                primeiroAcesso,
                listarInstituicao,
                atualizarInstituicao,
                novoGrupo,
                listarGrupos,
                novaSala,
                listarSalas,
                listarCategorias,
                listarReservas,
                novaReserva,
                listarUsuarios,
                listarMinhasReservas
            }}
        >
        {children}
        </AuthContext.Provider>
    );
};