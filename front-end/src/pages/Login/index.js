import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Header from '../../components/Header';
import { Container } from './styles';

const Login = () => {
    const { entrar } = useAuth();
    const navegar = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
      const usuario = localStorage.getItem('usuarioLogado');
      if (usuario) {
        console.log("Você já esta logado!");
        console.log(usuario)
      }else {
        console.log('Faça LOGIN!')
      }
      navegar('/')
    }, []);

    const submeterLogin = async() => {
      const resposta = await entrar(email, senha);
      if (resposta) {
        setErro(resposta);
      };
      navegar('/');
    };
    return(
      <div>
        <Header/>
        <Container>
          <h1>LOGIN</h1>
          <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(evento) => [setEmail(evento.target.value), setErro('')]}
          />
          <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(evento) => [setSenha(evento.target.value), setErro('')]}
          />
          <button onClick={submeterLogin}>Logar</button>
          <span>{erro}</span>
        </Container>
      </div>
    );
};

export default Login;