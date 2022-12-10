import React, { useEffect, useState } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import {
    Container,
    ContainerVazio,
    ContainerMenu,
    Content,
    ContainerPerfil,
    ContainerNome,
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
import useContexto from '../../hooks/useContexto';

const Menu = () => {
    const {menu, alterarMenu} = useContexto();
    const fecharMenu = () => alterarMenu();
    const [nome, setNome] = useState('Usuário não encontrado');
    const usuario = localStorage.getItem('usuarioAutenticado');

    useEffect(() => {
        if(usuario) {
            const {usuario_nome} = JSON.parse(usuario);
            if(usuario_nome) {
                setNome(usuario_nome);
            };
        };
    }, []);
    
    const sair = () => {
        // setUsuario(null);
        localStorage.clear();
    };

    const {pathname} = useLocation();

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