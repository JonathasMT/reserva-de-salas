import React from 'react';
import { Container, Content, ProfileContainer, NameContainer } from './styles';
import {
    FaTimes,
    FaRegCalendarAlt,
    FaAngleDown,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../person.jpg';
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
            <Content>
                <Link to='/'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='INÍCIO' />
                </Link>
                <Link to='/mybookings'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='MINHAS RESERVAS' />
                </Link>
                <Link to='/users'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='USUÁRIOS' />
                    </Link>
                <Link to='/configs'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='CONFIGURAÇÕES' />
                    </Link>
                <Link to='/logout'>
                    <SidebarItem Icon={FaRegCalendarAlt} Text='SAIR' />
                </Link>
            </Content>
        </Container>
    )
};

export default Sidebar;