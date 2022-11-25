// eslint-disable-next-line
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, SubContainer, Button, Form, ContainerInput, Input, InputImage} from './styles';
import Carregando from '../../components/Carregando';
import useCadastro from '../../hooks/useCadastro';

const PrimeiroAcesso = () => {

    const navegar = useNavigate();
    const {tamanhoBd, primeiroAcesso} = useCadastro();
    const [carregando, setCarregando] = useState(true);

    const [instituicaoNome, setInstituicaoNome] = useState('');
    const [logo, setLogo] = useState('');

    const [img, setImg] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        const verificaBd = async () => {
            const resposta = await tamanhoBd();
            setCarregando(false);
            if (resposta.erro) {
                navegar('/');
            };
        };
        verificaBd();
    }, []);

    const submeterPrimeiroAcesso = async() => {
        setCarregando(true);
        const resposta = await primeiroAcesso(
            instituicaoNome, 
            logo,
            img,
            nome,
            email,
            senha,
            confirmaSenha
        );
        setCarregando(false);
        if (resposta.msg) {
            setMsg(resposta.msg);
            if (resposta.ok){
                navegar('/');
            };
        }else {
            setMsg('Ocorreu um erro, tente novamente ou contacte o administrador do sistema s')
            return;
        };
    };

    return(
        <>
            {carregando? <Carregando/> :
            <Container>
                <SubContainer>
                        <Form>
                            <h2>Instituição</h2>
                            <ContainerInput> 
                                Nome:
                                <Input
                                    type='text'
                                    name='instituicao'
                                    placeholder='Digite o nome da sua instituição'
                                    value={instituicaoNome}
                                    required
                                    onChange={(e) => [setInstituicaoNome(e.target.value), setMsg(''), console.log(e.target.value)]}
                                />
                            </ContainerInput>
                            <ContainerInput> 
                                Logo:
                                <InputImage
                                    type='file'
                                    name='logo'
                                    placeholder='Selecione sua imagem de logo'
                                    value={logo}
                                    onChange={(e) => [setLogo(e.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                        </Form>
                        <Form>
                            <h2>Usuário</h2>
                            <ContainerInput> 
                                Imagem de perfil:
                                <InputImage
                                    type='text'
                                    name='img'
                                    placeholder='Selecione sua imagem de perfil'
                                    value={img}
                                    onChange={(e) => [setImg(e.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <ContainerInput> 
                                Nome:
                                <Input
                                    type='text'
                                    name='nome'
                                    placeholder='Digite seu nome completo'
                                    required
                                    value={nome}
                                    onChange={(e) => [setNome(e.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <ContainerInput> 
                                E-mail:
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='Digite seu e-mail'
                                    required
                                    value={email}
                                    onChange={(e) => [setEmail(e.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <ContainerInput>
                                Senha:
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Digite uma senha'
                                    required
                                    value={senha}
                                    onChange={(e) => [setSenha(e.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <ContainerInput>
                                Repita a senha:
                                <Input
                                    type='password'
                                    name='confirmaSenha'
                                    placeholder='Repita a senha'
                                    required
                                    value={confirmaSenha}
                                    onChange={(e) => [setConfirmaSenha(e.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                        </Form>
                        <Button onClick={submeterPrimeiroAcesso}>CADASTRAR</Button>
                        <p>{msg}</p>
                </SubContainer>
            </Container>
            }
        </>
    );
};

export default PrimeiroAcesso;