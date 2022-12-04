import {
    Button,
    Container,
    ContainerInput,
    Form,
    Input,
    InputCor,
    SubContainer} from './styles';

const NovaCategoria = () => {


    return(
      <Container>
        <SubContainer>
            <Form>
                <h3>Nova categoria de reservas</h3>
                <ContainerInput> 
                    Título:
                    <Input
                        type='text'
                        name='titulo'
                        placeholder='Digite o título da categoria'
                    />
                </ContainerInput>
                <ContainerInput>
                    Cor:
                    <InputCor
                        type='color'
                        name='cor'
                        value='#3DEB65'
                        placeholder='Selecione a cor'
                    />
                </ContainerInput>
                <Button>CADASTRAR</Button>
                <Button>CANCELAR</Button>
            </Form>
        </SubContainer>
      </Container>
    );
};

export default NovaCategoria;