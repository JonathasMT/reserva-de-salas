import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import {
    Container,
    SubContainer,
    Form,
    ContainerInput,
    Input,
    InputImage,
    Button,
    BotaoEditar,
    List
} from './styles';

import {BiEdit, BiPlus} from 'react-icons/bi';

import Carregamento from '../../components/Carregando';

const Configuracoes = () => {

    const navegar = useNavigate();

    const [carregando, setCarregando] = useState(false)

    const {instituicao, listarGrupos} = useAuth();
    const {nome_instituicao} = JSON.parse(instituicao);
    const [desativado, setDesativado] = useState(true);

    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        const buscarGrupos = async() => {
            setCarregando(true);
            const resposta = await listarGrupos();
            setCarregando(false);
            if (!resposta.erro) {
                setGrupos(resposta.grupos)
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };
        buscarGrupos();
    }, []);

    const alterarEdicao = (e) => {
        e.preventDefault();
        setDesativado(!desativado);
    }

    return(
        <>
            {carregando && <Carregamento/>}
            <Container>
                <SubContainer>
                    <Form>
                        <h3>Instituição</h3>
                        <ContainerInput> 
                            Nome da instituição:
                            <List>
                                {nome_instituicao}
                                <BiEdit onClick={(e) => [e.preventDefault(), navegar('/instituicao')]}/>
                            </List>
                        </ContainerInput>
                        {/* <ContainerInput> 
                            Logo:
                            <InputImage
                                type='file'
                                name='logo'
                                disabled={desativado}
                                placeholder='Selecione sua imagem de logo'
                            />
                        </ContainerInput> */}
                    </Form>
                    <Form>
                        <h2>Grupos de sala</h2>
                        {
                            grupos.length > 0 ? grupos.map((grupo, i) => 
                                <List key={i}>
                                    {grupo.titulo}
                                    <BiEdit onClick={(e) => [e.preventDefault(), navegar('/instituicao')]}/>
                                </List>
                            )
                            :
                            <List>
                                Não há grupos
                                <BiPlus onClick={(e) => [e.preventDefault(), navegar('/novogrupo')]}/>
                            </List>
                        }
                    </Form>
                    <Button>CADASTRAR</Button>
                </SubContainer>
            </Container>
        </>
    );
};

export default Configuracoes;