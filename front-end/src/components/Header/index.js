import React, { useState } from "react";
import { Container, ContainerInstituicao, Titulo, SubTitulo, SubContainerInstituicao } from './styles';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar';

import logo from '../../assets/img/logo.png';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const mostrarSidebar = () => setSidebar(!sidebar);

    return(
        <Container>
            <FaBars onClick={mostrarSidebar} />
            {sidebar && <Sidebar ativo={setSidebar} />}
            <ContainerInstituicao>
                <img src={logo} alt='Instituiçao' />
                <SubContainerInstituicao>
                    <Titulo>Faculdade Delta</Titulo>
                    <SubTitulo>Reserva de salas</SubTitulo>
                </SubContainerInstituicao>
            </ContainerInstituicao>
        </Container>
    )
}

export default Header;
