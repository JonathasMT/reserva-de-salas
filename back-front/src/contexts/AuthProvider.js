import {createContext, useEffect, useState} from 'react';
import api from '../services/api'


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [usuario, setUsuario] = useState(false);
    const [instituicao, setInstituicao] = useState(false);


    useEffect(() => {
        const u = localStorage.getItem('usuarioAutenticado');
        if (u) {
            setUsuario(u);
        };
        const i = localStorage.getItem('instituicao');
        if (i) {
            setInstituicao(i);
        };
    }, [usuario, instituicao]);

    //funções utilizadas para armazenar ou atualizar dados no local storage
    function localStorageUsuario(usuarioAutenticado) {
        localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
        setUsuario(localStorage.getItem('usuarioAutenticado'));
    };
    function localStorageInstituicao(instituicao) {
        localStorage.setItem('instituicao', JSON.stringify(instituicao));
        setInstituicao(localStorage.getItem('instituicao'));
    };

    async function login (dados) {
        var resposta;
        await api.post('/login', dados)
        .then((resultado) => {
            if(!resultado.erro) {
                localStorageUsuario(resultado.data.usuario);
                localStorageInstituicao(resultado.data.instituicao);
                resposta = resultado.data;
            };
        }).catch((erro) => {
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
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function primeiroAcesso(dados) {
        var retorno;
        await api.post('/primeiroacesso', dados)
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function atualizarPerfil(dados) {
        var retorno;
        await api.put('/atualizarperfil', dados)
        .then((resultado) => {
            if(!resultado.data.erro){
                //atualiza o usuario salvo no localStorage
                localStorageUsuario(resultado.data.usuario)
            };
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarPerfil() {
        var retorno;
        await api.get('/listarperfil')
        .then((resultado) => {
            if (!resultado.data.erro) {
                localStorageUsuario(resultado.data.usuario)
            };
            
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarUsuarios() {
        var retorno;
        await api.get('/listarusuarios')
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarInstituicao() {
        var retorno;
        await api.get('/listarinstituicao')
        .then((resultado) => {
            const {instituicao_nome} = resultado.data.instituicao;
            retorno = resultado.data;
        }).catch((erro) => {
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function atualizarInstituicao(instituicaoNome, logo) {
        var retorno;
        const {token} = JSON.parse(usuario);
        const dadosInstituicao = {
            instituicao_nome: instituicaoNome,
            logo: logo,
        };
        await api.put('/atualizarinstituicao', dadosInstituicao)
        .then((resultado) => {
            //atualiza a instituição salva no localStorage
            if(!resultado.data.erro){
                localStorage.setItem('instituicao', JSON.stringify(resultado.data.instituicao));
            };
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function novoGrupo(dados) {
        var retorno;
        await api.post('/novogrupo', dados)
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarGrupos() {
        var retorno;
        await api.get('/listargrupos')
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function novaSala(dados) {
        var retorno;
        await api.post('/novasala', dados)
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarSalas() {
        var retorno;
        await api.get('/listarsalas')
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function novaCategoria(dados) {
        var retorno;
        await api.post('/novacategoria', dados)
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarCategorias() {
        var retorno;
        await api.get('/listarcategorias')
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function novaReserva(dados) {
        var retorno;
        await api.post('/novareserva', dados)
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarReservas() {
        var retorno;
        await api.get('/listarreservas')
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
            retorno = erro.response.data;
        });
        return retorno;
    };

    async function listarMinhasReservas(id) {
        var retorno;
        await api.get('/listarminhasreservas')
        .then((resultado) => {
            retorno = resultado.data;
        }).catch((erro) => {
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
                setInstituicao,
                login,
                sair,
                tamanhoBd,
                primeiroAcesso,
                atualizarPerfil,
                listarPerfil,
                listarInstituicao,
                atualizarInstituicao,
                novoGrupo,
                listarGrupos,
                novaSala,
                listarSalas,
                novaCategoria,
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