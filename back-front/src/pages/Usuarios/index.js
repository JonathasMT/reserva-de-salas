import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

import {ContainerTabela, SubContainerTabela, BotaoTabela, ContainerTituloTabela} from '../../assets/styles';

import useAuth from '../../hooks/useAuth';
import {BsPencilSquare, BsPersonDash} from 'react-icons/bs';
import {BiEdit, BiPlus} from 'react-icons/bi';
import Carregamento from '../../components/Carregando';

const Usuarios = () => {

    moment.locale('pt-br');

    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false);
    const {listarUsuarios} = useAuth();
    const [usuarios, setUsuarios] = useState([]);

    const titulos = ['Id', 'Nome', 'E-mail', 'Nível', 'Status', 'Login', 'Criado', 'Atualizado', 'Opções'];
    const propriedades = ['usuario_id', 'usuario_nome', 'email', 'nivel','status', 'ultimo_login', 'criado_em', 'atualizado_em', 'opcoes'];
    const nivelUsuario = ['Usuário', 'Administrador']

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

    function renderiza(usuario, p) {
        var d;

        switch (p) {
            case 'nivel':
                return (nivelUsuario[usuario[p]-1]);
            case 'status':
                return (p? 'Ativo' : 'Desativado');
            case 'ultimo_login':
                d = (moment(usuario[p]).format('L - LTS'));
                return d;
            case 'criado_em':
                d = (moment(usuario[p]).format('L - LTS'));
                return d;
            case 'atualizado_em':
                d = (moment(usuario[p]).format('L - LTS'));
                return d;
            case 'opcoes':
                return (
                    <BsPencilSquare
                        title='Editar este usuário'
                        onClick={(e) => [
                            e.preventDefault(),
                            navegar('/editarusuario', {state: {usuarioId: usuario.usuario_id}})
                        ]}/>
                )
            default:
                return usuario[p];
        };
    };

    return(
        carregando ? <Carregamento/> : 
        <ContainerTabela>
            <ContainerTituloTabela>
                <h3>USUÁRIOS</h3>
                <BotaoTabela title='Adicionar novo usuário' onClick={(e) => [e.preventDefault(), navegar('/novousuario')]}>
                    <BiPlus/>
                </BotaoTabela>
            </ContainerTituloTabela>

            <SubContainerTabela>
                <table>
                    <thead>
                        <tr>
                            {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, u) => (
                            <tr key={u}>
                            {propriedades.map((p) => (
                                <td key={p}>
                                    {renderiza(usuario, p)}
                                </td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SubContainerTabela>
        </ContainerTabela>
    );
};

export default Usuarios;