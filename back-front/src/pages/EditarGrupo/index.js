import {useState} from 'react';
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
    ContainerHora
} from './styles';
import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';

const NovoGrupo = () => {

    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false)
    const {cadastrarGrupo} = useAuth();

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [diasSemana, setDiasSemana] = useState({dias: []});
    const [horaInicio, setHoraInicio] = useState('07:00');
    const [horaFim, setHoraFim] = useState('22:00');
    const [tempoAntecedencia, setTempoAntecedencia] = useState('');

    const [msg, setMsg] = useState('');

    const aoMudar = (e) => {
        const {value, checked} = e.target;
        const {dias} = diasSemana;
        if (checked) {
            setDiasSemana({dias: [...dias, value]});
        }else {
          setDiasSemana({
            dias: dias.filter((e) => e !== value),
          })
        };
    };

    const submeterCadastrar = async() => {
        setCarregando(true);
        const resposta = await cadastrarGrupo(
            titulo,
            descricao,
            diasSemana,
            horaInicio,
            horaFim,
            tempoAntecedencia
        );
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar(-1)
        };
        setCarregando(false);
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
        carregando ? <Carregamento/> :
        <Container>
            <SubContainer>
                <Form>
                    <h3>EDITAR GRUPO</h3>
                    <ContainerInput> 
                        Título:
                        <Input
                            type='text'
                            name='titulo'
                            placeholder='Digite o título do grupo de salas'
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </ContainerInput>
                    <ContainerInput> 
                        Descrição:
                        <InputTextArea
                            type='textarea'
                            name='descricao'
                            placeholder='Digite uma descrição sobre este grupo'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </ContainerInput>
                    <ContainerCheckBox>
                        Dias da semana reserváveis:
                        <SubContainerCheckBox>
                            <Checkbox
                                value='1'
                                onChange={aoMudar}
                            />
                            Domingo
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <Checkbox
                                value='2'
                                onChange={aoMudar}
                            />
                            Segunda
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <Checkbox
                                value='3'
                                onChange={aoMudar}
                            />
                            Terça
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <Checkbox
                                value='4'
                                onChange={aoMudar}
                            />
                            Quarta
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <Checkbox
                                value='5'
                                onChange={aoMudar}
                            />
                            Quinta
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <Checkbox
                                value='6'
                                onChange={aoMudar}
                            />
                            Sexta
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <Checkbox
                                value='7'
                                onChange={aoMudar}
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
                                value={horaInicio}
                                required
                                onChange={(e) => setHoraInicio(e.target.value)}
                            />
                            <Input
                                type='time'
                                id='hora-fim'
                                name='hora-fim'
                                min='00:01'
                                max='23:59'
                                value={horaFim}
                                required
                                onChange={(e) => setHoraFim(e.target.value)}

                            />
                        </ContainerHora>
                    </ContainerInput>
                    <ContainerInput>
                        Mínimo de antecedencia para reservas:
                        <Input
                            type='number'
                            name='antecedencia'
                            placeholder='Tempo em minutos'
                            value={tempoAntecedencia}
                            onChange={(e) => setTempoAntecedencia(e.target.value)}
                        />
                    </ContainerInput>
                    <Button
                        onClick={submeterCadastrar}
                        tipo={true}
                    >CADASTRAR</Button>
                    <Button onClick={(e) => [e.preventDefault(), navegar(-1)]}>CANCELAR</Button>
                </Form>
                <p>{msg}</p>
            </SubContainer>
        </Container>
    );
};

export default NovoGrupo;