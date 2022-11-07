import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { Container, ContainerInstituicao, Titulo, SubTitulo, SubContainerInstituicao } from './styles';
import Sidebar from '../Sidebar';
import logo from '../../assets/img/logo.png';
import useAuth from "../../hooks/useAuth";


const Header = () => {
    function Menu() {
        const { logado } = useAuth();
        if (logado) return <FaBars onClick={mostrarSidebar}/>;
    }
    const [sidebar, setSidebar] = useState(false);
    const mostrarSidebar = () => setSidebar(!sidebar);

    return(
        <Container>
            {Menu()}
            {sidebar && <Sidebar ativo={setSidebar} />}
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
    )
}

export default Header;
