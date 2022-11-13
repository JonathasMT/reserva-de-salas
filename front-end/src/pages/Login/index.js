import {useState} from 'react';
import {useNavigate as navegar} from 'react-router-dom';

import {Button, Container, Form, Input, SubContainer} from './styles';
import useAuth from '../../hooks/useAuth';
import Header from '../../components/Header';

const Login = () => {
    const {entrar} = useAuth();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

    // useEffect(() => {
    //   const usuario = localStorage.getItem('usuarioLogado');
    //   console.log('LOGADO? >> '+usuario);
    //   if (usuario) {
    //     console.log('Você já esta logado!');
    //     console.log(usuario);
    //   }else {
    //     console.log('Faça LOGIN!');
    //     return
    //   };
    //   navegar('/');
    // }, []);

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
              E-mail:
              <Input
                type='email'
                name='email'
                placeholder='Digite o seu e-mail'
                value={email}
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