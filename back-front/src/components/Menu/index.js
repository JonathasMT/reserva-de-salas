import React, { useEffect, useState } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import {
    Container,
    ContainerVazio,
    ContainerMenu,
    Content,
    ContainerPerfil,
    ContainerNome,
    ItemLink
} from './styles';

import {
    FaRegCalendarAlt,
    FaAngleDown,
    FaRegCalendarCheck,
    FaUsers,
} from 'react-icons/fa';

import MenuItem from '../MenuItem';
// import imgPerfil from '../../assets/img/person.jpg';
import useAuth from '../../hooks/useAuth';
import useContexto from '../../hooks/useContexto';


const Menu = () => {
    console.log('Passou no arquivo menu.js');
    const {menu, alterarMenu} = useContexto();
    const fecharMenu = () => alterarMenu();
    const {sair, usuario} = useAuth();
    const [nome, setNome] = useState('Nome não encontrado');

    useEffect(() => {
    const {nome} = JSON.parse(usuario);
    setNome(nome);
    }, []);

    const {pathname} = useLocation();

    console.log(pathname);
    return (
        <Container>
            <ContainerMenu menu={menu}>
                {/* <FaTimes onClick={() => fecharMenu()}/> */}
                <ContainerPerfil>
                    {/* <img src={imgPerfil} alt='Perfil' /> */}
                    <Link to='/perfil' onClick={() => fecharMenu()}>
                    <ContainerNome>
                            <p>{nome}</p>
                            <FaAngleDown />
                    </ContainerNome>
                    </Link>
                </ContainerPerfil>
                <Content>
                    <NavLink to='/' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<FaRegCalendarAlt/>} Texto='INÍCIO' Status={true} local={pathname==='/'}/>
                    </NavLink>
                    <NavLink to='/minhasreservas' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<FaRegCalendarCheck/>} Texto='MINHAS RESERVAS' local={pathname==='/minhasreservas'}/>
                    </NavLink>
                    <NavLink to='/usuarios' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<FaUsers/>} Texto='USUÁRIOS' local={pathname==='/usuarios'}/>
                        </NavLink>
                    <NavLink to='/configuracoes' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<FaRegCalendarAlt/>} Texto='CONFIGURAÇÕES' local={pathname==='/configuracoes'}/>
                    </NavLink>
                    <NavLink to='/' onClick={() => [sair() , fecharMenu()]}>
                        <MenuItem Icone={<FaRegCalendarAlt/>} Texto='SAIR'/>
                    </NavLink>
                </Content>
            </ContainerMenu>
            <ContainerVazio onClick={() => fecharMenu()}/>
        </Container>

    )
};

export default Menu;