import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Container, Form, Input, SubContainer } from './styles';
import useAuth from "../../hooks/useAuth";

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
      <Container>
        <SubContainer>
          <Form>
            <Input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(evento) => [setEmail(evento.target.value), setErro('')]}
            />
            <Input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(evento) => [setSenha(evento.target.value), setErro('')]}
            />
            <Button onClick={submeterLogin}>ENTRAR</Button>
            <span>{erro}</span>
          </Form>
        </SubContainer>
      </Container>
    );
};

export default Login;