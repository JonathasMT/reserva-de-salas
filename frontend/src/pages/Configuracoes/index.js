import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerListGrupo,
    ListGrupo,
    ListSala,
    ContainerTitulo,
    Circulo,
} from './styles';

import useContexto from '../../hooks/useContexto';

import {BiEdit, BiPlus} from 'react-icons/bi';

import Loading from '../../components/Loading';
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

    const [loading, setLoading] = useState(false)
    const {listarGrupos, listarSalas, listarCategorias} = useContexto();

    const [instituicaoNome, setInstituicaoNome] = useState();
    const [grupos, setGrupos] = useState([]);
    const [salas, setSalas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const instituicao = localStorage.getItem('instituicao');


    useEffect(() => {
        const {instituicao_nome} = JSON.parse(instituicao);
        setInstituicaoNome(instituicao_nome)
        const buscarGrupos = async() => {
            setLoading(true);
            const resposta = await listarGrupos();
            setLoading(false);
            if (!resposta.erro) {
                setGrupos(resposta.grupos)
            };
            if (resposta.erro) {
                alert(resposta.msg);
                
                return;
            };
            setLoading(false);
        };

        const buscarCategorias = async() => {
            setLoading(true);
            const resposta = await listarCategorias();
            setLoading(false);
            if (!resposta.erro) {
                setCategorias(resposta.categorias)
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setLoading(false);
        };

        buscarGrupos();
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
                                    <div key={i}>
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
                                    grupo.Salas.length > 0 ?
                                        grupo.Salas.map((sala, i) =>
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
            {loading && <Loading/>}
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