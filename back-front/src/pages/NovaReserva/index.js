import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import Loading from '../../components/Loading';
import useContexto from '../../hooks/useContexto';

import {
    Formulario,
    ContainerHora,
    Label,
    InputArea,
    Input,
    InputSelect,
    Botao,
    ContainerFormulario,
    SubContainerFormulario,
} from '../../assets/styles';

const NovaReserva = () => {

    const navegar = useNavigate();
    const {novaReserva} = useContexto();
    const location = useLocation();
    const dia = location.state.dia;
    const categorias = location.state.categorias;


    const [loading, setLoading] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [grupoId, setGrupoId] = useState(1);
    const [salaId, setSalaId] = useState(4);
    const [data, setData] = useState(dia);
    const [horaInicio, setHoraInicio] = useState('08:00');
    const [horaFim, setHoraFim] = useState('12:00');
    const [categoriaId, setCategoriaId] = useState();
    const [recorrencia, setRecorrencia] = useState('0');
    const [msg, setMsg] = useState('');
    const usuario = localStorage.getItem('usuarioAutenticado');

    useEffect(() => {
        setCategoriaId(categorias[0].categoria_id);
    }, []);

    const {usuario_id} = JSON.parse(usuario);

    const aoSubmeter = async (e) => {
        e.preventDefault();
        setLoading(true);
        const dados = {
            usuarioId: usuario_id,
            sala_id: salaId,
            categoria_id: categoriaId,
            recorrrencia_id: recorrencia,
            titulo,
            descricao,
            data,
            hora_inicio: horaInicio,
            hora_fim: horaFim,
        };
        const resposta = await novaReserva(dados);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar('/')
        }else {
            setMsg(resposta.msg);
        };
        setLoading(false);
        return;
    };

    return(
        loading ? <Loading/> :
        <ContainerFormulario>
                <SubContainerFormulario>
                    <Formulario onSubmit={aoSubmeter}>
                        <h3>NOVA RESERVA</h3>
                            <Label>Título:</Label>
                            <Input
                                type='text'
                                name='titulo'
                                placeholder='Digite o título da reserva'
                                required
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}/>
                            <Label>Descrição:</Label>
                            <InputArea
                                name='descricao'
                                placeholder='Digite uma descrição sobre esta reserva.'
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}/>
                            <Label>Sala:</Label>
                            <InputSelect
                                disabled
                                value={salaId}
                                onChange={(e) => setSalaId(parseInt(e.target.value))}>
                                <option value='1'>Sala 01</option>
                                <option value='2'>Sala 02</option>
                                <option value='3'>Sala 03</option>
                                <option value='4'>Sala 04</option>
                            </InputSelect>
                            <Label>Grupo:</Label>
                            <InputSelect 
                                disabled
                                value={grupoId}
                                onChange={(e) => setGrupoId(parseInt(e.target.value))}>
                                <option value='1'>Salas de aula</option>
                                <option value='2'>Laboratórios de informática</option>
                            </InputSelect>
                            <Label>Data:</Label>
                            <Input
                                type='date'
                                name='data'
                                placeholder='Digite a data para esta resera'
                                required
                                value={data}
                                onChange={(e) => setData(e.target.value)}/>
                            <Label>Horário de inicio e fim desta reserva:</Label>
                            <ContainerHora>
                                <Input
                                    type='time'
                                    id='hora-inicio'
                                    name='hora-inicio'
                                    min='00:00'
                                    max='23:59'
                                    required
                                    value={horaInicio}
                                    onChange={(e) => setHoraInicio(e.target.value)}/>
                                <Input
                                    type='time'
                                    id='hora-fim'
                                    name='hora-fim'
                                    min='00:00'
                                    max='23:59'
                                    required
                                    value={horaFim}
                                    onChange={(e) => setHoraFim(e.target.value)}/>
                            </ContainerHora>
                            <Label>Categoria:</Label>
                            <InputSelect 
                                required
                                onChange={(e) => setCategoriaId(Number.parseInt(e.target.value))}
                                >
                                    {
                                        categorias.map((categoria, i) => (
                                            <option key={i}value={categoria.categoria_id}>{categoria.categoria_nome}</option>
                                        ))
                                    }
                            </InputSelect>
                            <Label>Recorrência:</Label>
                            <InputSelect defaultValue='0' disabled>
                                <option value='0' >Não</option>
                                <option value='1'>Diarimante</option>
                                <option value='2'>Semanalmente</option>
                                <option value='3'>Mensalmente</option>
                                <option value='4'>Anualmente</option>
                            </InputSelect>
                        <Botao tipo={true} type='submit'>
                            CADASTRAR
                        </Botao>
                        <Botao onClick={(e) => [e.preventDefault(), navegar(-1)]}>
                            CANCELAR
                        </Botao>
                    </Formulario>
                    <p>{msg}</p>
                </SubContainerFormulario>
        </ContainerFormulario>
    );
};

export default NovaReserva;