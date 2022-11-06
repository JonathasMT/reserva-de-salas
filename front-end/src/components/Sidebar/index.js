import React from 'react';
import { Container, Content, ContainerPerfil, ContainerNome } from './styles';
import {
    FaTimes,
    FaRegCalendarAlt,
    FaAngleDown,
    FaRegCalendarCheck,
    FaUsers,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../assets/img/person.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = ({ativo}) => {
    const fecharSidebar = () => {ativo(false)};
    const { sair } = useAuth();
    const navegar = useNavigate();
  

    return (
        <Container sidebar={ativo} id="container">
            <FaTimes onClick={fecharSidebar} />
            <ContainerPerfil>
                <img src={imgPerfil} alt='Perfil' />
                <Link to='/login'>
                <ContainerNome>
                        <p>Nome Sobrenome</p>
                        <FaAngleDown />
                </ContainerNome>
                </Link>
            </ContainerPerfil>
            <Content >
                <NavLink to='/'>
                    <SidebarItem Icone={<FaRegCalendarAlt/>} Texto='INÍCIO' Status={true} />
                </NavLink>
                <NavLink to='/minhasreservas'>
                    <SidebarItem Icone={<FaRegCalendarCheck/>} Texto='MINHAS RESERVAS' />
                </NavLink>
                <NavLink to='/usuarios'>
                    <SidebarItem Icone={<FaUsers/>} Texto='USUÁRIOS' />
                    </NavLink>
                <NavLink to='/configuracoes' onClick={() => console.log('SAIR CLICADO')}>
                    <SidebarItem Icone={<FaRegCalendarAlt/>} Texto='CONFIGURAÇÕES' />
                </NavLink>
                <NavLink onClick={() => [sair(), navegar("/")]}>
                    <SidebarItem Icone={<FaRegCalendarAlt/>} Texto='SAIR' />
                </NavLink>
            </Content>
        </Container>
    )
};

export default Sidebar;