import {
    Button,
    Container,
    ContainerInput,
    Form,
    Input,
    SubContainer,
    InputTextArea,
    Select} from './styles';

const NovaSala = () => {


    return(
      <Container>
        <SubContainer>
            <Form>
                <span>Nova sala</span>
                <ContainerInput>
                    Grupo:
                    <Select defaultValue='1'>
                        <option value='1' hidden>Salas de aula</option>
                        <option value='2'>Laboratórios de informática</option>
                    </Select>
                </ContainerInput>
                <ContainerInput> 
                    Nome:
                    <Input
                        type='text'
                        name='nome'
                        placeholder='Digite o nome da sala ou espaço'
                    />
                </ContainerInput>
                <ContainerInput> 
                    Descrição:
                    <InputTextArea
                        type='textarea'
                        name='descricao'
                        placeholder='Digite uma descrição sobre esta sala'
                    />
                </ContainerInput>
                <ContainerInput>
                    Capacidade:
                    <Input
                        type='number'
                        name='capacidade'
                        placeholder='Digite a capacidade de pessoas'
                    />
                </ContainerInput>
                <Button>CADASTRAR</Button>
                <Button>CANCELAR</Button>
            </Form>
        </SubContainer>
      </Container>
    );
};

export default NovaSala;