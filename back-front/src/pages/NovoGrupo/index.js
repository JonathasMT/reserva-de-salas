import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

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

    const navegar = useNavigate();

    let arreio =[1, 2, 3, 4 ,5, 6];
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, sethoraFim] = useState('');
    const [tempoAntecedencia, settempoAntecedencia] = useState('');

    useEffect(() => {
    console.log(horaInicio);
    console.log(horaFim);
    console.log(arreio);
    }, [arreio]);




    return(
      <Container>
        <SubContainer>
            <Form>
                <h3>Novo grupo de salas</h3>
                <ContainerInput> 
                    Título:
                    <Input
                        type='text'
                        name='titulo'
                        placeholder='Digite o título do grupo de salas'
                        onChange={(e) => setTitulo( e.target.value)}
                    />
                </ContainerInput>
                <ContainerInput> 
                    Descrição:
                    <InputTextArea
                        type='textarea'
                        name='descricao'
                        placeholder='Digite uma descrição sobre este grupo'
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </ContainerInput>
                <ContainerCheckBox>
                    Dias da semana reserváveis:
                    <SubContainerCheckBox>
                        <Checkbox
                            value='1'
                            onChange={(e) => arreio.push(e.target.value)}
                        />
                        Domingo
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox
                            value='2'
                            checked
                            onChange={(e) => arreio.push(e.target.value)}
                        />
                        Segunda
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox
                            value='3'
                            checked
                            onChange={(e) => arreio.push(e.target.value)}
                        />
                        Terça
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox
                            value='4'
                            checked
                            onChange={(e) => arreio.push(e.target.value)}
                        />
                        Quarta
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox
                            value='5'
                            checked
                            onChange={(e) => arreio.includes(e.target.value)}
                        />
                        Quinta
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox
                            value='6'
                            checked
                            onChange={(e) => arreio.push(e.target.value)}
                        />
                        Sexta
                    </SubContainerCheckBox>
                    <SubContainerCheckBox>
                        <Checkbox
                            value='7'
                            onChange={(e) => arreio.push(...arreio,e.target.checked)}
                        />
                        Sábado
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
                            onChange={(e) => setHoraInicio(e.target.value)}
                        />
                        <Input
                            type='time'
                            id='hora-fim'
                            name='hora-fim'
                            min='00:01'
                            max='23:59'
                            defaultValue='22:00'
                            required
                            onChange={(e) => sethoraFim(e.target.value)}

                        />
                    </ContainerHora>
                </ContainerInput>
                <ContainerInput>
                    Mínimo de antecedencia para reservas:
                    <Input
                        type='number'
                        name='antecedencia'
                        placeholder='Tempo em minutos'
                        onChange={(e) => settempoAntecedencia(e.target.value)}
                    />
                </ContainerInput>
                <Button tipo={true}>CADASTRAR</Button>
                <Button onClick={(e) => [e.preventDefault(), navegar(-1)]}>CANCELAR</Button>
            </Form>
        </SubContainer>
      </Container>
    );
};

export default NovoGrupo;