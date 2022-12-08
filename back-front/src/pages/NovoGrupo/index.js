import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    InputArea,
    ContainerCheckBox,
    SubContainerCheckBox,
    InputCheckbox,
    ContainerHora,
    Botao
} from '../../assets/styles';

import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';


const NovoGrupo = () => {

    const navegar = useNavigate();
    const {novoGrupo} = useAuth();

    const [carregando, setCarregando] = useState(false);
    const [grupoNome, setGrupoNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [diasSemana, setDiasSemana] = useState({dias: []});
    const [horaInicio, setHoraInicio] = useState('07:00');
    const [horaFim, setHoraFim] = useState('22:00');
    const [antecedencia, setAntecedencia] = useState('');
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
        const dados = {
            grupo_nome: grupoNome,
            descricao,
            dias_semana: diasSemana,
            hora_inicio: horaInicio,
            hora_fim: horaFim,
            antecedencia_minima: antecedencia
        };
        const resposta = await novoGrupo(dados);
        setCarregando(false);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar(-1);
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
        <ContainerFormulario>
            {
                carregando ? <Carregamento/> :
                <SubContainerFormulario>
                    <Formulario onSubmit={submeterCadastrar}>
                        <h3>NOVO GRUPO DE SALAS</h3>
                        <Label>Nome:</Label>
                        <Input
                            type='text'
                            name='titulo'
                            placeholder='Digite um nome para este grupo de salas'
                            required
                            value={grupoNome}
                            onChange={(e) => setGrupoNome(e.target.value)}
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
                        <Label>Mínimo de antecedencia para reservas:</Label>
                        <Input
                            type='number'
                            name='antecedencia'
                            placeholder='Tempo em minutos'
                            value={antecedencia}
                            required
                            onChange={(e) => setAntecedencia(e.target.value)}
                        />
                        <Botao tipo={true} type='submit'>
                            CADASTRAR
                        </Botao>
                        <Botao onClick={(e) => [e.preventDefault(), navegar(-1)]}>
                            CANCELAR
                        </Botao>
                    </Formulario>
                    <p>{msg}</p>
                </SubContainerFormulario>
            }
        </ContainerFormulario>
    );
};

export default NovoGrupo;