import {
    Button,
    Container,
    ContainerInput,
    ContainerCheckBox,
    Form,
    Input,
    SubContainer,
    InputTextArea,
    Checkbox,
    SubContainerCheckBox,
    ContainerHora} from './styles';

const NovoGrupo = () => {


    return(
      <Container>
        <SubContainer>
            <Form>
                <span>Novo grupo de salas</span>
                <ContainerInput> 
                    Título:
                    <Input
                        type='text'
                        name='titulo'
                        placeholder='Digite o título do grupo de salas'
                    />
                </ContainerInput>
                <ContainerInput> 
                    Descrição:
                    <InputTextArea
                        type='textarea'
                        name='descricao'
                        placeholder='Digite uma descrição sobre este grupo'
                    />
                </ContainerInput>
                <ContainerCheckBox>
                    Dias da semana reserváveis:
                    <SubContainerCheckBox>
                    <Checkbox/>Domingo
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox/>Segunda
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox/>Terça
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox/>Quarta
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox/>Quinta
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox/>Sexta
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox/>Sábado
                    </SubContainerCheckBox>
                </ContainerCheckBox>
                <ContainerInput>
                    Horário inicial e final de reservas no dia:
                    <ContainerHora>
                        <Input
                            type='time'
                            id='hora-inicio'
                            name='hora-inicio'
                            min='00:01'
                            max='23:59'
                            defaultValue='07:00'
                            required
                        />
                        <Input
                            type='time'
                            id='hora-fim'
                            name='hora-fim'
                            min='00:01'
                            max='23:59'
                            defaultValue='22:00'
                            required
                        />
                    </ContainerHora>
                </ContainerInput>
                <ContainerInput>
                    Mínimo de antecedencia para reservas:
                    <Input
                        type='number'
                        name='antecedencia'
                        placeholder='Tempo em minutos'
                    />
                </ContainerInput>
                <Button>CADASTRAR</Button>
                <Button>CANCELAR</Button>
            </Form>
        </SubContainer>
      </Container>
    );
};

export default NovoGrupo;