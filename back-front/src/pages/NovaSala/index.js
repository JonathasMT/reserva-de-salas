import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    InputArea,
    InputSelect,
    Botao,
} from '../../assets/styles';

import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';


const NovaSala = () => {

    const location = useLocation();
    const {grupoId, grupoNome} = location.state;
    const navegar = useNavigate();
    const {novaSala} = useAuth();

    const [carregando, setCarregando] = useState(false);
    const [salaNome, setSalaNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capacidade, setCapacidade] = useState();
    const [msg, setMsg] = useState('');

    const submeterCadastrar = async() => {
        setCarregando(true);
        const dados = {
            grupo_id: grupoId,
            sala_nome: salaNome,
            descricao,
            capacidade
        }
        const resposta = await novaSala(dados);
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
            carregando ? <Carregamento/>:
            <SubContainerFormulario>
                <Formulario>
                    <h3>NOVA SALA</h3>
                        <Label>Grupo:</Label>
                        <InputSelect defaultValue={grupoId} disabled>
                            <option value={grupoId}>{grupoNome}</option>
                        </InputSelect>
                        <Label>Nome:</Label>
                        <Input
                            type='text'
                            placeholder='Digite um nome para identificação'
                            name={salaNome}
                            value={salaNome}
                            onChange={(e) => setSalaNome(e.target.value)}
                        />
                        <Label>Descrição:</Label>
                        <InputArea
                            type='textarea'
                            name='descricao'
                            placeholder='Digite uma descrição sobre esta sala'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                        <Label>Capacidade:</Label>
                        <Input
                            type='number'
                            name='capacidade'
                            placeholder='Digite a capacidade de pessoas'
                            value={capacidade}
                            onChange={(e) => setCapacidade(e.target.value)}
                        />
                    <Botao onClick={submeterCadastrar} tipo={true}>
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

export default NovaSala;