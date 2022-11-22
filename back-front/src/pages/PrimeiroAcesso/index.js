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

    const texto = `
        A conexão com o banco de 
        dados foi efetuada com 
        sucesso, porém  está em branco.
        Gostaria de iniciar a configuração do seu sistema?`

    const [conf, setConf] = useState(false);

    const continuar = (e) => {
        e.preventDefault();
        setConf(true);
    };

    // useEffect(() => {
    //     const verificaBd = async () => {
    //       const vazio = await tamanhoBd();
    //       if(!vazio){
    //         navegar('/');
    //       }else {
    //         setCarregando(false)
    //       }
    //     }
    //     verificaBd();
    // }, []);

    const [instituicaoNome, setInstituicaoNome] = useState();
    const [logo, setLogo] = useState('');

    const [img, setImg] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [msg, setMsg] = useState('');

    const submeterPrimeiroAcesso = async() => {
        const resposta = await primeiroAcesso(
            instituicaoNome, 
            logo,
            img,
            nome,
            email,
            senha,
            confirmaSenha
        );
        if (resposta) {
            setMsg(resposta);
        }else {
            setMsg('Erro ao conectar com a API')
            return;
        };
        navegar('/');
    };

    const BemVindo = () => {
        return (
            <Container>
                <SubContainer>
                    <h3>Bem Vindo ao Sistema Reserva Fácil</h3>
                    <p> 
                        {texto}
                    </p>
                    <Button onClick={continuar}>VAMOS LÁ</Button>
                </SubContainer>
            </Container>
        );
    };

    const Configurar = () => {
        return (
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
                            <h2>Usúario</h2>
                            <p>{msg}</p>
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
                </SubContainer>
            </Container>
        );
    };
    return(
        <>
            {/* {carregando? <Carregando/>: ''} */}
            {conf? <Configurar/> : <BemVindo/>}
        </>
     
    );
};

export default PrimeiroAcesso;