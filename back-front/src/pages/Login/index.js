import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    Botao
} from '../../assets/styles';

import useAuth from '../../hooks/useAuth';
import Carregamento from '../../components/Carregando';


const Login = () => {

    const navegar = useNavigate();
    const {login} = useAuth();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState(' ');
    const [carregando, setCarregando] = useState(false)

    const submeterLogin = async() => {
        const dados = {
            email,
            senha
        };
        setCarregando(true);
        const resposta = await login(dados);
        setCarregando(false);
        if (!resposta.erro) {
            navegar('/');
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
      <ContainerFormulario tipo={'true'}>
        {
            carregando ? <Carregamento/> :
                <SubContainerFormulario>
                    <Formulario onSubmit={submeterLogin}>
                        <h3>LOGIN</h3>
                        <Label>E-mail:</Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Digite o seu e-mail'
                            value={email}
                            required 
                            onChange={(evento) => [setEmail(evento.target.value), setMsg('')]}
                        />
                        <Label>Senha:</Label>
                        <Input
                            type='password'
                            name='senha'
                            placeholder='Digite sua senha'
                            value={senha}
                            required
                            onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                        />
                        <Botao tipo={true} type='submit'>
                            ENTRAR
                        </Botao>
                        <span>Esqueceu a senha?</span>
                    </Formulario>
                    {msg}
                </SubContainerFormulario>
        }
      </ContainerFormulario>
    );
};

export default Login;