import React, {useState} from 'react';
import {
    Container,
    SubContainer,
    ContainerDia,
    Dia,
    ContainerSemana,
    Semana,
    ContainerMes,
    Mes,
    ContainerSemanaSelecionada,
    ContainerMesSelecionado,
    ContainerDiaSelecionado
} from './styles';

function SelecionarTipo({aoClicar, selecionado}) {
    
    const clica = (valor) => {
        aoClicar(valor);

    }

    const DiaSelecionado = () => {
        return(
            <SubContainer>
                <ContainerDiaSelecionado>
                    <Dia>DIA</Dia>
                </ContainerDiaSelecionado>
                <ContainerSemana onClick={()=>clica('semana')}>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMes onClick={()=>clica('mes')}>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        );
    };
    const SemanaSelecionada = () => {
        return(
            <SubContainer>
                <ContainerDia onClick={()=>clica('dia')}>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemanaSelecionada>
                    <Semana>SEMANA</Semana>
                </ContainerSemanaSelecionada>
                <ContainerMes onClick={()=>clica('mes')}>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        );
    };
    const MesSelecionado = () => {
        return(
            <SubContainer>
                <ContainerDia onClick={()=>clica('dia')}>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemana onClick={()=>clica('semana')}>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMesSelecionado>
                    <Mes>MÊS</Mes>
                </ContainerMesSelecionado>
            </SubContainer>
        );
    };

    const Tipo = () => {
        switch (selecionado) {
        case 'dia':
            return <DiaSelecionado/>
        case 'semana':
            return <SemanaSelecionada/>
        case 'mes':
            return<MesSelecionado/>
        };
    };

    return(
        <Container>
            <Tipo/>
        </Container>
    );
}

export default SelecionarTipo;