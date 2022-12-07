import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerListGrupo,
    ListGrupo,
    ListSala,
    ContainerTitulo,
    Circulo,
} from './styles';

import useAuth from '../../hooks/useAuth';

import {BiEdit, BiPlus} from 'react-icons/bi';

import Carregamento from '../../components/Carregando';
import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    BotaoFlutuante,
    Listagem
} from '../../assets/styles';

const Configuracoes = () => {
    
    const navegar = useNavigate();

    const [carregando, setCarregando] = useState(false)
    const {instituicao, listarGrupos, listarSalas, listarCategorias} = useAuth();

    const [instituicaoNome, setInstituicaoNome] = useState();
    const [grupos, setGrupos] = useState([]);
    const [salas, setSalas] = useState([]);
    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        const {instituicao_nome} = JSON.parse(instituicao);
        setInstituicaoNome(instituicao_nome)
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
            <Formulario>
                <BotaoFlutuante title='Editar esta instituição' onClick={(e) => [e.preventDefault(), navegar('/editarinstituicao')]}>
                    <BiEdit/>
                </BotaoFlutuante>
                <h3>INSTITUIÇÃO</h3>
                    <Label>Nome da instituição:</Label>
                    <Listagem>
                        {instituicaoNome}
                    </Listagem>
            </Formulario>
        );
    };

    const formGrupos = () => {
        return (
            <Formulario>
                <BotaoFlutuante title='Adicionar um novo grupo de salas' onClick={(e) => [e.preventDefault(), navegar('/novogrupo')]}>
                    <BiPlus/>
                </BotaoFlutuante>
                <h3>GRUPOS E SALAS</h3>
                {   
                    grupos.length > 0 ?
                        grupos.map((grupo, i) =>
                            <ContainerListGrupo key={i}>
                                <ListGrupo>
                                    {grupo.grupo_nome}
                                    <div>
                                        <BiPlus
                                            title='Adicionar uma nova sala a este grupo'
                                            onClick={(e) => [
                                                e.preventDefault(),
                                                navegar('/novasala', {state: {grupoId: grupo.grupo_id, grupoNome: grupo.grupo_nome}})
                                            ]}/>
                                        <BiEdit title='Editar este grupo' onClick={(e) => [e.preventDefault(), navegar('/editargrupo')]}/>
                                    </div>

                                </ListGrupo>
                                {
                                    salas.length > 0 ?
                                        salas.map((sala, i) =>
                                            sala.grupo_id===grupo.grupo_id &&
                                                <ListSala key={i}>
                                                    <p>{sala.sala_nome}</p>
                                                    <BiEdit title='Editar esta sala' onClick={(e) => [e.preventDefault(), navegar('/editarsala')]}/>
                                                </ListSala>
                                        )
                                    :
                                    <ListSala>
                                        Não há salas neste grupo
                                    </ListSala>

                                }
                            </ContainerListGrupo>
                        )
                    :
                    <Listagem>
                        Não há grupos
                    </Listagem>
                }
            </Formulario>
        );
    };

    const formCategorias = () => {
        return (
            <Formulario>
                <BotaoFlutuante title='Adicionar uma nova categoria de reservas' onClick={(e) => [e.preventDefault(), navegar('/novacategoria')]}>
                    <BiPlus/>
                </BotaoFlutuante>
                <h3>CATEGORIAS</h3>
                {   
                    categorias.length > 0 ?
                    categorias.map((categoria, i) =>
                            <ContainerListGrupo key={i}>
                                <Listagem>
                                    <ContainerTitulo>
                                        <Circulo cor={categoria.cor}/>
                                        {categoria.categoria_nome}
                                    </ContainerTitulo>
                                    <BiEdit title='Editar esta categoria de reservas' onClick={(e) => [e.preventDefault(), navegar('/editarcategoria')]}/>
                                </Listagem>
                            </ContainerListGrupo>
                        )
                    :
                    <Listagem>
                        Não há categorias
                    </Listagem>
                }
            </Formulario>
        );
    };

    return(
        <>
            {carregando && <Carregamento/>}
            <ContainerFormulario>
                <SubContainerFormulario>
                    {formInstituicao()}
                    {formGrupos()}
                    {formCategorias()}
                </SubContainerFormulario>
            </ContainerFormulario>
        </>
    );
};

export default Configuracoes;