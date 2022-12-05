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
    BsCalendar2Event,
    BsCalendar2Check,
    BsPersonLinesFill,
    BsGear,
    BsBoxArrowInLeft
} from 'react-icons/bs';
import {FaAngleDown} from 'react-icons/fa';


import MenuItem from '../MenuItem';
// import imgPerfil from '../../assets/img/person.jpg';
import useAuth from '../../hooks/useAuth';
import useContexto from '../../hooks/useContexto';


const Menu = () => {
    console.log('Passou no arquivo menu.js');
    const {menu, alterarMenu} = useContexto();
    const fecharMenu = () => alterarMenu();
    const {sair, usuario} = useAuth();
    const [nome, setNome] = useState('Usuário não encontrado');

    useEffect(() => {
        if(usuario) {
            const {usuario_nome} = JSON.parse(usuario);
            if(usuario_nome) {
                setNome(usuario_nome);
            };
        };
    }, []);

    const {pathname} = useLocation();

    console.log(pathname);
    return (
        <Container>
            <ContainerMenu menu={menu}>
                <ContainerPerfil>
                    <Link to='/perfil' onClick={() => fecharMenu()}>
                    <ContainerNome>
                            <p>{nome}</p>
                            <FaAngleDown />
                    </ContainerNome>
                    </Link>
                </ContainerPerfil>
                <Content>
                    <NavLink to='/' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<BsCalendar2Event/>} Texto='INÍCIO' Status={true} status={pathname==='/'}/>
                    </NavLink>
                    <NavLink to='/minhasreservas' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<BsCalendar2Check/>} Texto='MINHAS RESERVAS' status={pathname==='/minhasreservas'}/>
                    </NavLink>
                    <NavLink to='/usuarios' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<BsPersonLinesFill/>} Texto='USUÁRIOS' status={pathname==='/usuarios'}/>
                        </NavLink>
                    <NavLink to='/configuracoes' onClick={() => fecharMenu()}>
                        <MenuItem Icone={<BsGear/>} Texto='CONFIGURAÇÕES' status={pathname==='/configuracoes'}/>
                    </NavLink>
                    <NavLink to='/' onClick={() => [sair() , fecharMenu()]}>
                        <MenuItem Icone={<BsBoxArrowInLeft/>} Texto='SAIR'/>
                    </NavLink>
                </Content>
            </ContainerMenu>
            <ContainerVazio onClick={() => fecharMenu()}/>
        </Container>

    )
};

export default Menu;