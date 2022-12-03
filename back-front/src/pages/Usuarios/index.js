import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
    Container,
    Coluna,
    HeaderColuna,
    ContainerHeader,
    ContainerBody,
    ContainerLista,
    ContainerBodyLinha,
    ContainerBodyColuna,
    Linha,
    LinhaHeader,
    SubContainer
} from './styles';

// import {usuarios} from "../../assets/import/bancoFake";

import useAuth from '../../hooks/useAuth';
import {BsPencilSquare, BsPersonDash} from 'react-icons/bs';
import Carregamento from '../../components/Carregando';
import { getDefaultNormalizer } from '@testing-library/react';
import { FaConfluence } from 'react-icons/fa';

const Usuarios = () => {

    // const header = Object.keys(usuarios[0]);
    // console.log('NOMES >>'+header)

    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false)
    const {listarUsuarios} = useAuth();
    const [usuarios, setUsuarios] = useState([]);

    const formatar = (data) => {
        const novaData = new Date(data);
        return novaData.toLocaleString('pt-br')
    };

    useEffect(() => {
        const buscarUsuarios = async() => {
            setCarregando(true);
            const resposta = await listarUsuarios();
            setCarregando(false);
            if (!resposta.erro) {
                setUsuarios(resposta.usuarios)
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };

        buscarUsuarios();
    }, []);

    return(
        <Container>
            {carregando && <Carregamento/>}
            <SubContainer>
                <Coluna>
                    <LinhaHeader>ID</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {usuario.usuario_id}
                                {console.log('usuario')}
                                {console.log(usuario)}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>NOME</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {usuario.nome}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>EMAIL</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {usuario.email}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>NÍVEL</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {usuario.nivel}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>STATUS</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {usuario.status? 'Ativo':'Desativado'}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>LOGIN</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {usuario.criacao}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>CRIADO</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {formatar(usuario.criado_em)}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>ATUALIZADO</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                {formatar(usuario.atualizado_em)}
                            </Linha>
                        ))
                    }
                </Coluna>
                <Coluna>
                    <LinhaHeader>OPÇÕES</LinhaHeader>
                    {
                        usuarios.map((usuario, i) => (
                            <Linha>
                                <BsPencilSquare/>
                            </Linha>
                        ))
                    }
                </Coluna>
            </SubContainer>
        </Container>
    );
};

export default Usuarios;