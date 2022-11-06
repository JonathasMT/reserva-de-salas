import { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const apiUrl = "http://localhost:3001";
    const [usuario, setUsuario] = useState();


    useEffect(() => {
        const usuarioLogado = localStorage.getItem('usuarioLogado');

        if (usuarioLogado) {
            const {token, email} = JSON.parse(usuarioLogado);

            if (token && email) {
                const temUsuario = usuarioLogado;
                if (temUsuario) setUsuario(temUsuario[0]);
            };
        };
    }, []);

    const entrar = async (email, senha) => {
        var retorno;
        const dadosLogin = {email:email,senha:senha};
        await axios.post(apiUrl+'/login', dadosLogin)
        .then((resultado) => {
            const token = resultado.data.token;
            const usuarioId = resultado.data.usuarioId;
            const usuarioNome = resultado.data.nome;
            const usuarioEmail = resultado.data.email;
            localStorage.setItem('usuarioLogado', JSON.stringify(
                {
                    token:token,
                    usuarioId:usuarioId,
                    nome:usuarioNome,
                    email:usuarioEmail
                }));
            setUsuario({token, email});
            console.log(resultado.data.msg);
            retorno=resultado.data.msg;
        }).catch((erro) => {
            retorno=erro.response.data.msg;
        });
        return retorno;
    };

    const cadastrar = (email, senha) => {
        const armazenamentoUsuario = JSON.parse(localStorage.getItem("users_bd"));
        const temUsuario = armazenamentoUsuario?.filter((usuario) => usuario.email === email);
        if (temUsuario?.length) {
        return "Já tem uma conta com esse E-mail";
        }
        let novoUsuario;
        if (armazenamentoUsuario) {
        novoUsuario = [...armazenamentoUsuario, { email, senha }];
        } else {
        novoUsuario = [{ email, senha }];
        }
        localStorage.setItem("users_bd", JSON.stringify(novoUsuario));
        return;
    };

    const sair = () => {
        setUsuario(null);
        localStorage.removeItem('usuarioLogado');
    };

    return (
        <AuthContext.Provider
        value={{ usuario, logado: !!usuario, entrar, cadastrar, sair }}
        >
        {children}
        </AuthContext.Provider>
    );
};