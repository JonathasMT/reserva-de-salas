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
    List,
    ContainerListGrupo,
    FormSala,
    ListGrupo,
    ListSala,
    ContainerListSala
} from './styles';

import {BiEdit, BiPlus} from 'react-icons/bi';

import Carregamento from '../../components/Carregando';

const Configuracoes = () => {
    
    const navegar = useNavigate();

    const [carregando, setCarregando] = useState(false)
    const {instituicao, listarGrupos, listarSalas} = useAuth();

    const {nome_instituicao} = JSON.parse(instituicao);
    const [desativado, setDesativado] = useState(true);
    const [grupos, setGrupos] = useState([]);
    const [salas, setSalas] = useState([]);

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

        const buscarSalas = async() => {
            setCarregando(true);
            const resposta = await listarSalas();
            setCarregando(false);
            if (!resposta.erro) {
                setSalas(resposta.salas)
                console.log(resposta.salas);
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };
        buscarGrupos();
        buscarSalas();
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
                        <BotaoEditar onClick={(e) => [e.preventDefault(), navegar('/novogrupo')]}>
                            <BiPlus/>
                        </BotaoEditar>
                        <h2>Grupos de sala</h2>
                        {   
                            grupos.length > 0 ?
                                grupos.map((grupo, i) =>
                                    <ContainerListGrupo key={i}>
                                        <ListGrupo>
                                            {grupo.titulo}
                                            <BiEdit onClick={(e) => [e.preventDefault(), navegar('/instituicao')]}/>
                                        </ListGrupo>
                                        {
                                            salas.map((sala, i) =>
                                                sala.grupo_id===grupo.grupo_id &&
                                                    <ListSala key={i}>
                                                        {sala.titulo}
                                                        <BiEdit onClick={(e) => [e.preventDefault(), navegar('/instituicao')]}/>
                                                    </ListSala>
                                            )
                                        }
                                    </ContainerListGrupo>
                                )
                            :
                            <List>
                                Não há grupos
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