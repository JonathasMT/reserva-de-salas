import React from "react";
import { Container, SubContainer, ContainerDia, Dia, ContainerSemana, Semana, ContainerMes, Mes } from './styles';

function SelecionarTipo() {

    return(
        <Container>
            <SubContainer>
                <ContainerDia>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemana>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMes>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        </Container>
    );
}

export default SelecionarTipo;