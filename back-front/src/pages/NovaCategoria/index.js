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
                <span>Nova categoria de reservas</span>
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