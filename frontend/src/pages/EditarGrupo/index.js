import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    ContainerCheckBox,
    SubContainerCheckBox,
    ContainerHora,
    Label,
    Input,
    InputArea,
    InputCheckbox,
    Botao
} from '../../assets/styles';

import Loading from '../../components/Loading';
import useContexto from '../../hooks/useContexto';

const NovoGrupo = () => {

    const navegar = useNavigate();
    const [loading, setLoading] = useState(false)
    const {cadastrarGrupo} = useContexto();

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
        setLoading(true);
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
        setLoading(false);
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
        loading ? <Loading/> :
        <ContainerFormulario>
            <SubContainerFormulario>
                <Formulario onSubmit={submeterCadastrar}>
                    <h3>EDITAR GRUPO</h3>
                        <Label>Nome do grupo:</Label>
                        <Input
                            type='text'
                            name='titulo'
                            placeholder='Digite um nome para este grupo de salas'
                            required
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                        <Label>Descrição:</Label>
                        <InputArea
                            type='textarea'
                            name='descricao'
                            placeholder='Digite uma descrição sobre este grupo'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    <Label>Dias da semana reserváveis:</Label>
                    <ContainerCheckBox>
                        
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='1'
                                onChange={aoMudar}
                            />
                            Domingo
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='2'
                                onChange={aoMudar}
                            />
                            Segunda
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='3'
                                onChange={aoMudar}
                            />
                            Terça
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='4'
                                onChange={aoMudar}
                            />
                            Quarta
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='5'
                                onChange={aoMudar}
                            />
                            Quinta
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='6'
                                onChange={aoMudar}
                            />
                            Sexta
                        </SubContainerCheckBox>
                        <SubContainerCheckBox>
                            <InputCheckbox
                                value='7'
                                onChange={aoMudar}
                            />
                            Sábado
                        </SubContainerCheckBox>
                    </ContainerCheckBox>
                        <Label>Horário inicial e final de reservas no dia:</Label>
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
                        <Label>Mínimo de antecedencia para reservas:</Label>
                        <Input
                            type='number'
                            name='antecedencia'
                            placeholder='Tempo em minutos'
                            required
                            value={tempoAntecedencia}
                            onChange={(e) => setTempoAntecedencia(e.target.value)}
                        />
                    <Botao
                        type='submit'
                        tipo={true}>
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

export default NovoGrupo;