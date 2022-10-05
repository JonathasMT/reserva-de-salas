import React from 'react';
import { Container, Content, PerfilContainer } from './styles';
import {
    FaTimes,
    // FaHome,
    // FaEnvelope,
    // FaRegSun,
    // FaUserAlt,
    // FaIdCardAlt,
    // FaRegFileAlt,
    FaRegCalendarAlt,
    // FaChartBar
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../person.jpg';

const Sidebar = ({active}) => {
    const perfil = '../../person.jpg'
    const closeSidebar = () => {
        active(false)
    }
    return (
        <Container sidebar={active}>
            <PerfilContainer>
                //aki
                <img src={imgPerfil} />
                <FaTimes onClick={closeSidebar} />
            </PerfilContainer>
            <Content>
                <SidebarItem Icon={FaRegCalendarAlt} Text='INÍCIO' />
            </Content>
        </Container>
    )
};

export default Sidebar;