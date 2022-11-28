import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

import {Container, ContainerInstituicao, Titulo, SubTitulo, SubContainerInstituicao} from './styles';
import Menu from '../Menu';
import logo from '../../assets/img/logo.png';
import useAuth from '../../hooks/useAuth';
import useContexto from '../../hooks/useContexto';


const Header = () => {
    console.log('Passou no arquivo Header.js');
    const {usuario} = useAuth();
    const {menu, alterarMenu} = useContexto();

    const mostrarMenu = (e) => {
        e.preventDefault();
        alterarMenu();
    };

    return(
        <>  
            {usuario && (
                <Container>
                    <FaBars onClick={mostrarMenu}/>
                    {menu && <Menu/>}
                    <NavLink to='/'>
                        <ContainerInstituicao>
                            <img src={logo} alt='Instituiçao' />
                            <SubContainerInstituicao>
                                <Titulo>Faculdade Delta</Titulo>
                                <SubTitulo>Reserva de salas</SubTitulo>
                            </SubContainerInstituicao>
                        </ContainerInstituicao>
                    </NavLink>
                </Container>
            )}
        </>
    )
}

export default Header;
