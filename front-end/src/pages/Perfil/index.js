import { useState } from 'react';
import { useNavigate as navegar} from 'react-router-dom';

import { Button, Container, Form, Input, SubContainer } from './styles';
import useAuth from '../../hooks/useAuth';

const Perfil = () => {
    const { entrar, usuario } = useAuth();

    console.log('USUARIO >>>'+usuario);

    // const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

    const {token, nome, email} = JSON.parse(usuario);


    const submeterLogin = async() => {
      const resposta = await entrar(email, senha);
      if (resposta) {
        setMsg(resposta);
      }else {
        setMsg('Erro ao conectar com a API')
        return;
      };
      navegar('/');
    };

    return(
      <Container>
        <SubContainer>
          <Form>
          <span> 
              Nome:
              <Input
                type='nome'
                name='nome'
                placeholder='Digite seu nome completo'
                value={nome}
                // onChange={(evento) => [setEmail(evento.target.value), setMsg('')]}
              />
            </span>
            <span> 
              E-mail:
              <Input
                type='email'
                name='email'
                placeholder='Digite seu e-mail'
                value={email}
                // onChange={(evento) => [setEmail(evento.target.value), setMsg('')]}
              />
            </span>
            <span>
              Senha atual:
              <Input
                type='password'
                name='senha'
                placeholder='Digite sua senha atual'
                value={senha}
                onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
              />
            </span>
            <span>
              Nova senha:
              <Input
                type='password'
                name='senha'
                placeholder='Digite uma nova senha'
                value={senha}
                onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
              />
            </span>
            <span>
              Repita a nova senha:
              <Input
                type='password'
                name='senha'
                placeholder='Repita a nova senha'
                value={senha}
                onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
              />
            </span>
            <Button onClick={submeterLogin}>ATUALIZAR</Button>
            <Button onClick={submeterLogin}>CANCELAR</Button>
            {msg}
          </Form>
          <br/>
          <span>Esqueceu a senha?</span>
        </SubContainer>
      </Container>
    );
};

export default Perfil;