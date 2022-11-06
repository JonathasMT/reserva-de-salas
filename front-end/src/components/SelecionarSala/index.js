import React from "react";
import { Container, SubContainer, Grupo, Sala } from './styles';
import { FaAngleDown } from "react-icons/fa";

function SelecionarSala() {
    return(
        <Container>
            <SubContainer>
                <Grupo>
                    Salas de aula
                    <FaAngleDown/>
                </Grupo>
                <Sala>
                    Sala 04
                </Sala>
            </SubContainer>
        </Container>
    );
}

export default SelecionarSala;