import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router';
import {
    Button,
    Container,
    ContainerInput,
    Form,
    Input,
    SubContainer,
    InputTextArea,
    Select
} from './styles';
import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';

const NovaSala = () => {

    const location = useLocation();
    const {grupoId, grupoNome} = location.state;
    const navegar = useNavigate();
    const {novaSala} = useAuth();

    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capacidade, setCapacidade] = useState();
    const [msg, setMsg] = useState('');

    const submeterCadastrar = async() => {
        setCarregando(true);
        const dados = {
            grupoId,
            nome,
            descricao,
            capacidade
        }
        const resposta = await novaSala(dados);
        setCarregando(false);
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
        if (!resposta.erro) {
            alert(resposta.msg);
        };
    };

    return(
      <Container>
        {
            carregando ? <Carregamento/>:
            <SubContainer>
                <Form>
                    <h3>Nova sala</h3>
                    <ContainerInput>
                        Grupo:
                        <Select defaultValue={grupoId} disabled>
                            <option value={grupoId}>{grupoNome}</option>
                        </Select>
                    </ContainerInput>
                    <ContainerInput> 
                        Nome:
                        <Input
                            type='text'
                            name='nome'
                            placeholder='Digite um nome para identificação'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </ContainerInput>
                    <ContainerInput> 
                        Descrição:
                        <InputTextArea
                            type='textarea'
                            name='descricao'
                            placeholder='Digite uma descrição sobre esta sala'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        Capacidade:
                        <Input
                            type='number'
                            name='capacidade'
                            placeholder='Digite a capacidade de pessoas'
                            value={capacidade}
                            onChange={(e) => setCapacidade(e.target.value)}
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
        }
      </Container>
    );
};

export default NovaSala;