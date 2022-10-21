import React, { useState } from "react";
import { Container, ContainerInstituicao, Title, Subtitle } from './styles';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <ContainerInstituicao>
                <Title>Faculdade Delta</Title>
                <Subtitle>Reserva de salas</Subtitle>
            </ContainerInstituicao>
        </Container>
    )
}

export default Header;
