import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {HeaderColuna, Container, ContainerHeader, ContainerBody, ContainerLista, ContainerBodyLinha, ContainerBodyColuna} from './styles';

// import {usuarios} from "../../assets/import/bancoFake";

import useAuth from '../../hooks/useAuth';
import {BsPencilSquare, BsPersonDash} from 'react-icons/bs';
import Carregamento from '../../components/Carregando';

const Usuarios = () => {

    // const header = Object.keys(usuarios[0]);
    // console.log('NOMES >>'+header)

    const propriedades = ['ID', 'NOME', 'EMAIL', 'NÍVEL', 'STATUS', 'LOGIN', 'CRIADO', 'ATUALIZADO', 'OPÇÔES'];
    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false)
    const {listarUsuarios} = useAuth();
    const [usuarios, setUsuarios] = useState([]);


    const usuarioPropriedades = () => {
        return(
            propriedades.map(
                (p) => <HeaderColuna key={p}>{p}</HeaderColuna>
            )
        )
    }

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
            <ContainerHeader>
                {usuarioPropriedades()}
            </ContainerHeader>
            {
                usuarios.map((usuario, i) => (
                    <ContainerBodyLinha key={i}>
                        <ContainerBodyColuna>
                            {usuario.usuario_id}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.nome}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.email}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.nivel}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.status}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.ultimo_login}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.criado_em}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            {usuario.atualizado_em}
                        </ContainerBodyColuna>
                        <ContainerBodyColuna>
                            <BsPencilSquare/>
                            <BsPersonDash/>
                        </ContainerBodyColuna>
                    </ContainerBodyLinha>
                ))
            }
        </Container>

    );
};

export default Usuarios;

{/* <Container>
<h3>Usuários</h3>
<table cellSpacing='1'>
    <thead>
        <tr>
            {header.map((nome, i) => <th key={i}>{nome}</th>)}
        </tr>
    </thead>
    <tbody>
        {usuarios.map((usuario, i) => (
            <tr key={i}>
            {header.map((nome, i) => (
                <td key={i}>{usuario[nome]}</td>
            ))}
            </tr>
        ))}
    </tbody>
</table>
</Container> */}