import React from 'react';
import { Container, Content, ProfileContainer, NameContainer } from './styles';
import {
    FaTimes,
    // FaHome,
    // FaEnvelope,
    // FaRegSun,
    // FaUserAlt,
    // FaIdCardAlt,
    // FaRegFileAlt,
    FaRegCalendarAlt,
    // FaChartBar,
    FaAngleDown,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../person.jpg';

const Sidebar = ({active}) => {
    const closeSidebar = () => {active(false)};

    return (
        <Container sidebar={active} id="container">
            <FaTimes onClick={closeSidebar} />
            <ProfileContainer>
                <img src={imgPerfil} alt='Profile' />
                {/* <FaTimes onClick={closeSidebar} /> */}
                <NameContainer>
                    <p>Nome Sobrenome</p>
                    <FaAngleDown />
                </NameContainer>
            </ProfileContainer>
            <Content>
                <SidebarItem Icon={FaRegCalendarAlt} Text='INÍCIO' />
                <SidebarItem Icon={FaRegCalendarAlt} Text='MINHAS RESERVAS' />
                <SidebarItem Icon={FaRegCalendarAlt} Text='USUÁRIOS' />
                <SidebarItem Icon={FaRegCalendarAlt} Text='CONFIGURAÇÕES' />
                <SidebarItem Icon={FaRegCalendarAlt} Text='SAIR' />
            </Content>
        </Container>
    )
};

export default Sidebar;