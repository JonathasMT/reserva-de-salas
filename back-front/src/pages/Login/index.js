import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Container, Form, Input, SubContainer} from './styles';
import useAuth from '../../hooks/useAuth';
import Carregamento from '../../components/Carregando'


const Login = () => {

    const navegar = useNavigate();
    const {entrar} = useAuth();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [carregando, setCarregando] = useState(false)

    const submeterLogin = async() => {
        setCarregando(true);
        const resposta = await entrar(email, senha);
        setCarregando(false);
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
        {carregando && <Carregamento/>}
        <SubContainer>
          <Form type='post'>
            <span> 
              E-mail:
              <Input
                type='email'
                name='email'
                placeholder='Digite o seu e-mail'
                value={email}
                required
                onChange={(evento) => [setEmail(evento.target.value), setMsg('')]}
              />
            </span>
            <span>
              Senha:
              <Input
                type='password'
                name='senha'
                placeholder='Digite sua senha'
                value={senha}
                required
                onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
              />
            </span>
            <Button onClick={submeterLogin}>ENTRAR</Button>
            {msg}
          </Form>
          <br/>
          <span>Esqueceu a senha?</span>
        </SubContainer>
      </Container>
    );
};

export default Login;