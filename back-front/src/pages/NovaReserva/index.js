import {
    Button,
    Container,
    ContainerInput,
    Form,
    Input,
    SubContainer,
    InputTextArea,
    ContainerHora,
    Select} from './styles';

const NovaReserva = () => {


    return(
      <Container>
        <SubContainer>
            <Form>
                <span>Nova reserva</span>
                <ContainerInput> 
                    Título:
                    <Input
                        type='text'
                        name='titulo'
                        placeholder='Digite o título da reserva'
                    />
                </ContainerInput>
                <ContainerInput> 
                    Descrição:
                    <InputTextArea
                        type='textarea'
                        name='descricao'
                        placeholder='Digite uma descrição sobre esta reserva'
                    />
                </ContainerInput>
                <ContainerInput>
                    Grupo de salas:
                    <Select defaultValue='1' disabled>
                        <option value='1' hidden>Salas de aula</option>
                        <option value='2'>Laboratórios de informática</option>
                    </Select>
                </ContainerInput>
                <ContainerInput>
                    Sala:
                    <Select defaultValue='1'disabled>
                        <option value='1' hidden>Sala de aula 01</option>
                        <option value='2'>Sala de aula 02</option>
                    </Select>
                </ContainerInput>
                <ContainerInput> 
                    Data:
                    <Input
                        type='date'
                        defaultValue='2022-11-14'
                        name='data'
                        placeholder='Digite a data para esta resera'
                    />
                </ContainerInput>
                <ContainerInput>
                    Horário de inicio e fim desta reserva:
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
                            defaultValue='09:00'
                            required
                        />
                    </ContainerHora>
                </ContainerInput>
                <ContainerInput>
                    Categoria:
                    <Select defaultValue='1'>
                        <option value='1'>Aula</option>
                        <option value='2'>Reunião</option>
                        <option value='3'>Curso</option>
                        <option value='4'>Outro</option>
                    </Select>
                </ContainerInput>
                <ContainerInput>
                    Repetir:
                    <Select defaultValue='1'>
                        <option value='1' >Não</option>
                        <option value='2'>Diarimante</option>
                        <option value='3'>Semanalmente</option>
                        <option value='4'>Mensalmente</option>
                        <option value='4'>Anualmente</option>
                    </Select>
                </ContainerInput>
                <Button>CADASTRAR</Button>
                <Button>CANCELAR</Button>
            </Form>
        </SubContainer>
      </Container>
    );
};

export default NovaReserva;