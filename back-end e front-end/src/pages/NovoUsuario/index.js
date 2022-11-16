import {Button, Container, ContainerInput, InputImage, Form, Input, Select, SubContainer} from './styles';

const NovoUsuario = () => {


    return(
      <Container>
        <SubContainer>
            <Form>
                <span>Novo usuário</span>
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
                    Nível de permissão:
                    <Select defaultValue='1'>
                        <option value='1' hidden>usuario</option>
                        <option value='2'>administrador</option>
                    </Select>
                </ContainerInput>
                <ContainerInput>
                    Senha:
                    <Input
                        type='password'
                        name='senha'
                        placeholder='Digite sua senha atual'
                    />
                </ContainerInput>
                <ContainerInput>
                    Repita a senha:
                    <Input
                        type='password'
                        name='senha'
                        placeholder='Repita a nova senha'
                    />
                </ContainerInput>
                <Button>CADASTRAR</Button>
                <Button>CANCELAR</Button>
            </Form>
        </SubContainer>
      </Container>
    );
};

export default NovoUsuario;