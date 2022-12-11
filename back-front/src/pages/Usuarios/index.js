import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

import {ContainerTabela, SubContainerTabela, BotaoTabela, ContainerTituloTabela} from '../../assets/styles';

import useContexto from '../../hooks/useContexto';
import {BsPencilSquare, BsPersonDash} from 'react-icons/bs';
import {BiEdit, BiPlus} from 'react-icons/bi';
import Loading from '../../components/Loading';

const Usuarios = () => {

    moment.locale('pt-br');

    const navegar = useNavigate();
    const [loading, setLoading] = useState(true);
    const {listarUsuarios} = useContexto();
    const [usuarios, setUsuarios] = useState([]);

    const titulos = ['Id', 'Nome', 'E-mail', 'Nível', 'Status', 'Login', 'Criado', 'Atualizado', 'Opções'];
    const propriedades = ['usuario_id', 'usuario_nome', 'email', 'nivel','status', 'ultimo_login', 'criado_em', 'atualizado_em', 'opcoes'];
    const nivelUsuario = ['Usuário', 'Administrador']

    useEffect(() => {
        const buscarUsuarios = async() => {
            const resposta = await listarUsuarios();
            if (!resposta.erro) {
                setUsuarios(resposta.usuarios)
            };
            if (resposta.erro) {
                alert(resposta.msg);
            };
            setLoading(false);
            return;
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
                console.log(usuario[p]);
                if(usuario[p]) {
                    d = (moment(usuario[p]).format('DD/MM/YYYY - hh:mm a'));
                }else{
                    d = ''
                };
                return d;
            case 'criado_em':
                d = (moment(usuario[p]).format('DD/MM/YYYY - hh:mm a'));
                return d;
            case 'atualizado_em':
                d = (moment(usuario[p]).format('DD/MM/YYYY - hh:mm a'));
                return d;
            case 'opcoes':
                return (
                    <BsPencilSquare
                        title='Editar este usuário'
                        onClick={(e) => [
                            e.preventDefault(),
                            navegar('/editarusuario', {state: {usuarioId: usuario.usuario_id}})
                        ]}/>
                );
            default:
                return usuario[p];
        };
    };

    return(
        loading ? <Loading/> : 
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
                        {usuarios.map((usuario, i) => (
                            <tr key={i}>
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