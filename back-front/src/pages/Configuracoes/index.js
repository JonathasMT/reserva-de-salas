import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
    Container,
    SubContainer,
    Form,
    ContainerInput,
    Button,
    BotaoFlutuante,
    List,
    ContainerListGrupo,
    ListGrupo,
    ListSala,
    ContainerTitulo,
    Circulo,
} from './styles';

import useAuth from '../../hooks/useAuth';

import {BiEdit, BiPlus} from 'react-icons/bi';

import Carregamento from '../../components/Carregando';

const Configuracoes = () => {
    
    const navegar = useNavigate();

    const [carregando, setCarregando] = useState(false)
    const {instituicao, listarGrupos, listarSalas, listarCategorias} = useAuth();

    const {nome_instituicao} = JSON.parse(instituicao);
    const [grupos, setGrupos] = useState([]);
    const [salas, setSalas] = useState([]);
    const [categorias, setCategorias] = useState([]);


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

        const buscarCategorias = async() => {
            setCarregando(true);
            const resposta = await listarCategorias();
            setCarregando(false);
            if (!resposta.erro) {
                setCategorias(resposta.categorias)
                console.log(resposta.categorias);
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };

        buscarGrupos();
        buscarSalas();
        buscarCategorias();
    }, []);

    const formInstituicao = () => {
        return (
            <Form>
                <BotaoFlutuante onClick={(e) => [e.preventDefault(), navegar('/editarinstituicao')]}>
                    <BiEdit/>
                </BotaoFlutuante>
                <h3>Instituição</h3>
                <ContainerInput> 
                    Nome da instituição:
                    <List>
                        {nome_instituicao}
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
        );
    };

    const formGrupos = () => {
        return (
            <Form>
                <BotaoFlutuante onClick={(e) => [e.preventDefault(), navegar('/novogrupo')]}>
                    <BiPlus/>
                </BotaoFlutuante>
                <h3>Grupos de sala</h3>
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
                                                <p>{sala.titulo}</p>
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
        );
    };

    const formCategorias = () => {
        return (
            <Form>
                <BotaoFlutuante onClick={(e) => [e.preventDefault(), navegar('/novacategoria')]}>
                    <BiPlus/>
                </BotaoFlutuante>
                <h3>Categorias de reserva</h3>
                {   
                    categorias.length > 0 ?
                    categorias.map((categoria, i) =>
                            <ContainerListGrupo key={i}>
                                <List>
                                    <ContainerTitulo>
                                        <Circulo cor={categoria.cor}/>
                                        {categoria.titulo}
                                    </ContainerTitulo>
                                    <BiEdit onClick={(e) => [e.preventDefault(), navegar('/categoria')]}/>
                                </List>
                            </ContainerListGrupo>
                        )
                    :
                    <List>
                        Não há categorias
                    </List>
                }
            </Form>
        );
    };

    return(
        <>
            {carregando && <Carregamento/>}
            <Container>
                <SubContainer>
                    {formInstituicao()}
                    {formGrupos()}
                    {formCategorias()}
                </SubContainer>
            </Container>
        </>
    );
};

export default Configuracoes;