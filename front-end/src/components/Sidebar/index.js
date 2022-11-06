import React from 'react';
import { Container, Content, ContainerPerfil, ContainerNome } from './styles';
import {
    FaTimes,
    FaRegCalendarAlt,
    FaAngleDown,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../assets/img/person.jpg';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ativo}) => {
    const fecharSidebar = () => {ativo(false)};

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
                    <SidebarItem Icone={FaRegCalendarAlt} Texto='INÍCIO' />
                </NavLink>
                <NavLink to='/minhasreservas'>
                    <SidebarItem Icone={FaRegCalendarAlt} Texto='MINHAS RESERVAS' />
                </NavLink>
                <NavLink to='/usuarios'>
                    <SidebarItem Icone={FaRegCalendarAlt} Texto='USUÁRIOS' />
                    </NavLink>
                <NavLink to='/configuracoes'>
                    <SidebarItem Icone={FaRegCalendarAlt} Texto='CONFIGURAÇÕES' />
                    </NavLink>
                <NavLink to='/logout'>
                    <SidebarItem Icone={FaRegCalendarAlt} Texto='SAIR' />
                </NavLink>
            </Content>
        </Container>
    )
};

export default Sidebar;