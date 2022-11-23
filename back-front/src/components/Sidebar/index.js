import React, { useEffect, useState } from 'react';
import {Container, Content, ContainerPerfil, ContainerNome} from './styles';
import {
    FaTimes,
    FaRegCalendarAlt,
    FaAngleDown,
    FaRegCalendarCheck,
    FaUsers,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';
import imgPerfil from '../../assets/img/person.jpg';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = ({ativo}) => {

    console.log('Passou no arquivo sidebar.js');
    const navegar = useNavigate();
    const fecharSidebar = () => {ativo(false)};
    const {sair, usuario} = useAuth();
    const [nome, setNome] = useState('Ninguem');

    // useEffect(() => {
    // const {nome} = JSON.parse(usuario);
    // setNome(nome);
    // }, []);



    return (
        <Container sidebar={ativo}>
            <FaTimes onClick={() => fecharSidebar()} />
            <ContainerPerfil>
                <img src={imgPerfil} alt='Perfil' />
                <Link to='/perfil' onClick={() => fecharSidebar()}>
                <ContainerNome>
                        <p>{nome}</p>
                        <FaAngleDown />
                </ContainerNome>
                </Link>
            </ContainerPerfil>
            <Content >
                <NavLink to='/' onClick={() => fecharSidebar()}>
                    <SidebarItem Icone={<FaRegCalendarAlt/>} Texto='INÍCIO' Status={true} />
                </NavLink>
                <NavLink to='/minhasreservas' onClick={() => fecharSidebar()}>
                    <SidebarItem Icone={<FaRegCalendarCheck/>} Texto='MINHAS RESERVAS' />
                </NavLink>
                <NavLink to='/usuarios' onClick={() => fecharSidebar()}>
                    <SidebarItem Icone={<FaUsers/>} Texto='USUÁRIOS' />
                    </NavLink>
                <NavLink to='/configuracoes' onClick={() => fecharSidebar()}>
                    <SidebarItem Icone={<FaRegCalendarAlt/>} Texto='CONFIGURAÇÕES' />
                </NavLink>
                <NavLink to='/' onClick={() => [sair() , fecharSidebar()]}>
                    <SidebarItem Icone={<FaRegCalendarAlt/>} Texto='SAIR' />
                </NavLink>
            </Content>
        </Container>
    )
};

export default Sidebar;