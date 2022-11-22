import {createContext, useEffect, useState} from 'react';
import api from '../services/api'


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    console.log('Passou no arquivo auth.js');
    const [usuario, setUsuario] = useState();

    useEffect(() => {
        console.log('Passou no arquivo auth.js >> useEffect');
        const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
        if (usuarioAutenticado) {
            setUsuario(usuarioAutenticado);
        };
    }, []);

    async function entrar (email, senha) {
        var retorno;
        const dadosLogin = {email:email,senha:senha};
        await api.post('/login', dadosLogin)
        .then((resultado) => {
            const {token, usuario_id, nome, email} = resultado.data;
            localStorage.setItem('usuarioAutenticado', JSON.stringify(
                {
                    usuario_id:usuario_id,
                    nome:nome,
                    email:email,
                    token:token
                }));
            setUsuario({token, email});
            console.log(resultado.data.msg);
            retorno=resultado.data.msg;
        }).catch((erro) => {
            console.log('ERRO >>'+erro)
            retorno=erro.response.data.msg;
        });
        return retorno;
    };

    const cadastrar = (email, senha) => {
        const armazenamentoUsuario = JSON.parse(localStorage.getItem('users_bd'));
        const temUsuario = armazenamentoUsuario?.filter((usuario) => usuario.email === email);
        if (temUsuario?.length) {
        return 'Já tem uma conta com esse E-mail';
        };
        let novoUsuario;
        if (armazenamentoUsuario) {
        novoUsuario = [...armazenamentoUsuario, {email, senha}];
        } else {
        novoUsuario = [{email, senha}];
        };
        localStorage.setItem('users_bd', JSON.stringify(novoUsuario));
        return;
    };

    const sair = () => {
        setUsuario(null);
        localStorage.removeItem('usuarioAutenticado');
    };

    return (
        <AuthContext.Provider
            value={{usuario, autenticado: !!usuario, entrar, cadastrar, sair}}>
        {children}
        </AuthContext.Provider>
    );
};