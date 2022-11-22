import {Container, SubContainer, Form, ContainerInput, Input, InputImage, Button} from './styles';

const ConfiguracaoInicial = () => {

    const msg = `Usuario usado para cadastrar novos usúarios e gerenciar as configurações do sistema.`;


    return(
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

export default ConfiguracaoInicial;