import React from 'react';
import { Container, Content, ProfileContainer, NameContainer } from './styles';
import {
    FaTimes,
    FaRegCalendarAlt,
    FaAngleDown,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../assets/img/person.jpg';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({active}) => {
    const closeSidebar = () => {active(false)};

    return (
        <Container sidebar={active} id="container">
            <FaTimes onClick={closeSidebar} />
            <ProfileContainer>
                <img src={imgPerfil} alt='Profile' />
                <Link to='/login'>
                <NameContainer>
                        <p>Nome Sobrenome</p>
                        <FaAngleDown />
                </NameContainer>
                </Link>
            </ProfileContainer>
            <Content >
                <NavLink to='/'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='INÍCIO' />
                </NavLink>
                <NavLink to='/mybookings'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='MINHAS RESERVAS' />
                </NavLink>
                <NavLink to='/users'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='USUÁRIOS' />
                    </NavLink>
                <NavLink to='/configs'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='CONFIGURAÇÕES' />
                    </NavLink>
                <NavLink to='/logout'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='SAIR' />
                </NavLink>
            </Content>
        </Container>
    )
};

export default Sidebar;