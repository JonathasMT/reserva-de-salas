import { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const apiUrl = "http://localhost:3001";
    const [usuario, setUsuario] = useState();


    useEffect(() => {
        const usuarioLogado = localStorage.getItem("usuarioLogado");

        if (usuarioLogado) {
        const temUsuario = JSON.parse(usuarioLogado)?.filter(
            (usuario) => usuario.usuario.id === JSON.parse(usuarioLogado).usuarioId
        );
        if (temUsuario) setUser(temUsuario[0]);
        console.log(temUsuario);
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

        const temUsuario = usersStorage?.filter((user) => user.email === email);

    if (temUsuario?.length) {
            if (temUsuario[0].email === email && temUsuario[0].password === password) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ email, token }));
            setUser({ email, password });
            return;
        } else {
            return "E-mail ou senha incorretos";
        }
    } else {
        return "Usuário não cadastrado";
        }
    };

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

        const temUsuario = usersStorage?.filter((user) => user.email === email);

        if (temUsuario?.length) {
        return "Já tem uma conta com esse E-mail";
        }

        let newUser;

        if (usersStorage) {
        newUser = [...usersStorage, { email, password }];
        } else {
        newUser = [{ email, password }];
        }

        localStorage.setItem("users_bd", JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
        value={{ user, signed: !!user, signin, signup, signout }}
        >
        {children}
        </AuthContext.Provider>
    );
};