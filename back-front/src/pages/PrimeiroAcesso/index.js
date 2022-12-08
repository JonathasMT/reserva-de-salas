// eslint-disable-next-line
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import  {ContainerFormulario, SubContainerFormulario, Formulario, Label, Input, Botao} from '../../assets/styles';

import Carregando from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';


const PrimeiroAcesso = () => {

    const navegar = useNavigate();
    const {tamanhoBd, primeiroAcesso} = useAuth();
    const [carregando, setCarregando] = useState(true);

    const [instituicaoNome, setInstituicaoNome] = useState('');
    const [logo, setLogo] = useState('');

    const [img, setImg] = useState('');
    const [usuarioNome, setUsuarioNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        const verificaBd = async () => {
            const resposta = await tamanhoBd();
            setCarregando(false);
            console.log('ERRO? ' + resposta.erro);
            if (resposta.erro) {
                navegar('/');
            };
        };
        verificaBd();
    }, []);

    const submeterPrimeiroAcesso = async(e) => {
        e.preventDefault();

        const dados = {
            instituicao_nome: instituicaoNome, 
            logo,
            img,
            usuario_nome: usuarioNome,
            email,
            senha,
            confirmaSenha
        };
        setCarregando(true);
        const resposta = await primeiroAcesso(dados);
        setCarregando(false);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar('/')
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
        <>
            {carregando? <Carregando/> :
            <ContainerFormulario>
                <SubContainerFormulario>
                        <Formulario onSubmit={submeterPrimeiroAcesso}>
                            <h3>INSTITUIÇÃO</h3>
                                    <Label>Nome da instituição:</Label>
                                    <Input
                                        type='text'
                                        name='instituicao'
                                        placeholder='Digite o nome da sua instituição'
                                        value={instituicaoNome}
                                        required
                                        onChange={(e) => [setInstituicaoNome(e.target.value), setMsg(''), console.log(e.target.value)]}
                                    />
                            <h3>USUÁRIO</h3>
                                <Label>Nome do usuário:</Label>
                                <Input
                                    type='text'
                                    name='nome'
                                    placeholder='Digite seu nome completo'
                                    required
                                    value={usuarioNome}
                                    onChange={(e) => [setUsuarioNome(e.target.value), setMsg('')]}
                                />
                                <Label>E-mail:</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='Digite seu e-mail'
                                    required
                                    value={email}
                                    onChange={(e) => [setEmail(e.target.value), setMsg('')]}
                                />
                                <Label>Senha:</Label>
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Digite uma senha'
                                    required
                                    value={senha}
                                    onChange={(e) => [setSenha(e.target.value), setMsg('')]}
                                />
                                <Label>Repita a senha:</Label>
                                <Input
                                    type='password'
                                    name='confirmaSenha'
                                    placeholder='Repita a senha'
                                    required
                                    value={confirmaSenha}
                                    onChange={(e) => [setConfirmaSenha(e.target.value), setMsg('')]}
                                />
                                <Botao type='submit' tipo={true}>
                                    CADASTRAR
                                </Botao>
                                <p>{msg}</p>
                        </Formulario>
                </SubContainerFormulario>
            </ContainerFormulario>
            }
        </>
    );
};

export default PrimeiroAcesso;