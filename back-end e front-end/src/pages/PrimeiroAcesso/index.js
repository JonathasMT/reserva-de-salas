// eslint-disable-next-line
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {Container, SubContainer, Button, Form, ContainerInput, Input, InputImage} from './styles';

const PrimeiroAcesso = () => {

    const navegar = useNavigate();
    const {root} = useAuth();

    const msg = `
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
    //       const retorno = await root();
    //       if(!retorno==='0'){
    //         navegar('/login');
    //       }
    //     }
    //     verificaBd();
        
    //   }, []);

    const BemVindo = () => {
        return (
            <Container>
                <SubContainer>
                    <h3>Bem Vindo ao Sistema Reserva Fácil</h3>
                    <p> 
                        {msg}
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
                                    name='nome'
                                    placeholder='Digite o nome da sua instituição'
                                />
                            </ContainerInput>
                            <ContainerInput> 
                                Logo:
                                <InputImage
                                    type='file'
                                    name='logo'
                                    placeholder='Selecione sua imagem de logo'
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
                                    name='nome'
                                    placeholder='Selecione sua imagem de perfil'
                                />
                            </ContainerInput>
                            <ContainerInput> 
                                Nome:
                                <Input
                                    type='text'
                                    name='nome'
                                    placeholder='Digite seu nome completo'
                                />
                            </ContainerInput>
                            <ContainerInput> 
                                E-mail:
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='Digite seu e-mail'
                                />
                            </ContainerInput>
                            <ContainerInput>
                                Senha:
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Digite uma senha'
                                />
                            </ContainerInput>
                            <ContainerInput>
                                Repita a senha:
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Repita a senha'
                                />
                            </ContainerInput>
                        </Form>
                        <Button>CADASTRAR</Button>
                </SubContainer>
            </Container>
        );
    };
    return(
        <>
            {conf? <Configurar/> : <BemVindo/>}
        </>
     
    );
};

export default PrimeiroAcesso;