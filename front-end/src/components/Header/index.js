import React, { useState } from "react";
import { Container, ContainerInstituicao, Title, Subtitle, SubContainerInstituicao } from './styles';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar';

import img from '../../icon.png';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <ContainerInstituicao>
                <img src={img} alt='Instituiçao' />
                <SubContainerInstituicao>
                    <Title>Faculdade Delta</Title>
                    <Subtitle>Reserva de salas</Subtitle>
                </SubContainerInstituicao>
            </ContainerInstituicao>
        </Container>
    )
}

export default Header;
