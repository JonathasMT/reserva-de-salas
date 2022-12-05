import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
    Container,
    SubContainer,
    Form,
    ContainerInput,
    Input,
    // InputImage,
    Button
} from './styles';
import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';

const ConfiguracaoInicial = () => {

    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false)
    const {listarInstituicao, atualizarInstituicao} = useAuth();

    const [instituicaoNome, setInstituicaoNome] = useState('');
    const [logo, setLogo] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const buscarInstituicao = async() => {
            setCarregando(true);
            const resposta = await listarInstituicao();
            setCarregando(false);
            if (!resposta.erro) {
                const {instituicao_nome} = resposta.instituicao;
                setInstituicaoNome(instituicao_nome);
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };
        buscarInstituicao();
    }, []);

    const submeterAtualizar = async() => {
        setCarregando(true);
        const resposta = await atualizarInstituicao(instituicaoNome, logo);
        setCarregando(false);
        if (!resposta.erro) {
            alert(resposta.msg);
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
      <Container>
        {carregando && <Carregamento/>}
        <SubContainer>
            <Form>
                <h2>Instituição</h2>
                <ContainerInput> 
                    Nome da instituição:
                    <Input
                        type='text'
                        name='nome'
                        placeholder='Digite o nome da sua instituição'
                        value={instituicaoNome}
                        onChange={(e) => setInstituicaoNome(e.target.value)}
                    />
                </ContainerInput>
                {/* <ContainerInput> 
                    Logo:
                    <InputImage
                        type='file'
                        name='logo'
                        placeholder='Selecione sua imagem de logo'

                    />
                </ContainerInput> */}
                <Button
                    onClick={submeterAtualizar}
                    tipo={true}
                >ATUALIZAR</Button>
                <Button
                    onClick={(e) => [e.preventDefault(), navegar(-1)]}
                >CANCELAR
                </Button>
                {msg}
            </Form>
        </SubContainer>
      </Container>
    );
};

export default ConfiguracaoInicial;