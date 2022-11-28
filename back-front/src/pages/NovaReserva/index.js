import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import {
    Button,
    Container,
    ContainerInput,
    Form,
    Input,
    SubContainer,
    InputTextArea,
    ContainerHora,
    Select
} from './styles';

import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';


const NovaReserva = ({navigation}) => {

    const navegar = useNavigate();
    const {usuario, novaReserva} = useAuth();

    const location = useLocation();
    const dia = location.state.dia;

    const [carregando, setCarregando] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [grupoId, setGrupoId] = useState('1');
    const [salaId, setSalaId] = useState(4);
    const [data, setData] = useState(dia);
    const [horaInicio, setHoraInicio] = useState('08:00');
    const [horaFim, setHoraFim] = useState('12:00');
    const [categoriaId, setCategoriaId] = useState(1);
    const [repete, setRepete] = useState('0');
    const [msg, setMsg] = useState('');

    const {usuario_id} = JSON.parse(usuario);
    const aoSubmeter = async (e) => {
        e.preventDefault();
        const dados = {
            titulo,
            descricao,
            salaId,
            data,
            horaInicio,
            horaFim,
            categoriaId,
            repete,
            usuarioId: usuario_id,
        };
        setCarregando(true);
        const resposta = await novaReserva(dados);
        setCarregando(false);
        if (!resposta.erro) {
            setCarregando(false);
            alert(resposta.msg);
            navegar('/')
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    }

    return(
      <Container>
        {carregando && <Carregamento/>}
        <SubContainer>
            <Form onSubmit={aoSubmeter}>
                <span>Nova reserva</span>
                <ContainerInput> 
                    Título:
                    <Input
                        type='text'
                        name='titulo'
                        placeholder='Digite o título da reserva'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </ContainerInput>
                <ContainerInput> 
                    Descrição:
                    <InputTextArea
                        type='textarea'
                        name='descricao'
                        placeholder='Digite uma descrição sobre esta reserva.'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </ContainerInput>
                <ContainerInput>
                    Sala:
                    <Select
                        disabled
                        value={salaId}
                        onChange={(e) => setSalaId(parseInt(e.target.value))}
                    >
                        <option value='1'>Sala 01</option>
                        <option value='2'>Sala 02</option>
                        <option value='3'>Sala 03</option>
                        <option value='4'>Sala 04</option>
                    </Select>
                </ContainerInput>
                <ContainerInput>
                    Grupo:
                    <Select 
                        disabled
                        value={grupoId}
                        onChange={(e) => setGrupoId(parseInt(e.target.value))}
                    >
                        <option value='1'>Salas de aula</option>
                        <option value='2'>Laboratórios de informática</option>
                    </Select>
                </ContainerInput>
                <ContainerInput> 
                    Data:
                    <Input
                        type='date'
                        name='data'
                        placeholder='Digite a data para esta resera'
                        value={data}
                        onChange={(e) => setData(e.target.value)}
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
                            required
                            value={horaInicio}
                            onChange={(e) => setHoraInicio(e.target.value)}
                        />
                        <Input
                            type='time'
                            id='hora-fim'
                            name='hora-fim'
                            min='00:01'
                            max='23:59'
                            required
                            value={horaFim}
                            onChange={(e) => setHoraFim(e.target.value)}
                        />
                    </ContainerHora>
                </ContainerInput>
                <ContainerInput>
                    Categoria:
                    <Select 
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(parseInt(e.target.value))}
                    >
                        <option value='1'>Aula</option>
                        <option value='2'>Reunião</option>
                        <option value='3'>Curso</option>
                        <option value='4'>Outro</option>
                    </Select>
                </ContainerInput>
                <ContainerInput>
                    Repetir:
                    <Select defaultValue='1' disabled>
                        <option value='1' >Não</option>
                        <option value='2'>Diarimante</option>
                        <option value='3'>Semanalmente</option>
                        <option value='4'>Mensalmente</option>
                        <option value='4'>Anualmente</option>
                    </Select>
                </ContainerInput>
                <Button tipo={true} type='submit'>CADASTRAR  </Button>
                <Button
                    onClick={(e) => [e.preventDefault(), navegar(-1)]}
                >CANCELAR</Button>
            </Form>
            <p>{msg}</p>
        </SubContainer>
      </Container>
    );
};

export default NovaReserva;