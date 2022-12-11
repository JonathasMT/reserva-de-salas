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

import Loading from '../../components/Loading';
import useContexto from '../../hooks/useContexto';


const NovaSala = () => {

    const location = useLocation();
    const {grupoId, grupoNome} = location.state;
    const navegar = useNavigate();
    const {novaSala} = useContexto();

    const [loading, setLoading] = useState(false);
    const [salaNome, setSalaNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capacidade, setCapacidade] = useState();
    const [msg, setMsg] = useState('');

    const submeterCadastrar = async() => {
        setLoading(true);
        const dados = {
            grupo_id: grupoId,
            sala_nome: salaNome,
            descricao,
            capacidade
        }
        const resposta = await novaSala(dados);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar(-1);
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
        };
        setLoading(false);
        return;
    };

    return(
        <ContainerFormulario>
            {
                loading ? <Loading/> :
                <SubContainerFormulario>
                    <Formulario onSubmit={submeterCadastrar}>
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

export default NovaSala;