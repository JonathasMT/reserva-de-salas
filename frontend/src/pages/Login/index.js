import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    Botao
} from '../../assets/styles';

import useContexto from '../../hooks/useContexto';
import Loading from '../../components/Loading';


const Login = () => {

    const navegar = useNavigate();
    const {login} = useContexto();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false)

    const submeterLogin = async() => {
        setLoading(true);
        const dados = {
            email,
            senha
        };
        const resposta = await login(dados);
        if (!resposta.erro) {
            navegar(0);
        }else {
            setMsg(resposta.msg);
            setLoading(false);
        };
        return;
    };

    return(
        loading ? <Loading/> :
        <ContainerFormulario tipo={'true'}>
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
                <p>{msg}</p>
            </SubContainerFormulario>
        </ContainerFormulario>
    );
};

export default Login;